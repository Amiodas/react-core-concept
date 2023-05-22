function Person(props) {
  const person = {
    border: "5px solid green",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  };

  return (
    <div style={person}>
      <h1>{props.name}</h1>
      <p>Country: {props.country}</p>
      <p>Profession: {props.profession}</p>
      <p>Players type: {props.playerType}</p>
      <h1>{props.position + 1}</h1>
    </div>
  );
}

export default Person;
