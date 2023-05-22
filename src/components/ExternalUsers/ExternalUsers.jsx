import { useEffect, useState } from "react";
import User from "../User/User";

const ExternalUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div>
      <h1>External Users</h1>
      {users.map((user) => (
        <User key={user.id} name={user.name} email={user.email}></User>
      ))}
    </div>
  );
};

export default ExternalUsers;
