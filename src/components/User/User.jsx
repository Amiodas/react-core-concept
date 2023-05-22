const User = (props) => {
  return (
    <div
      style={{
        border: "5px solid green",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};

export default User;
