import "./App.css";
import Counter from "./components/Counter/Counter";
import ExternalUsers from "./components/ExternalUsers/ExternalUsers";
import Person from "./components/Person/Person";
import Todos from "./components/Todos/Todos";

function App() {
  const players = [
    {
      name: "Mashrafee Bin Martuza",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "All Rounder",
    },
    {
      name: "Shakib Al Hasan",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "All Rounder",
    },
    {
      name: "Tamim Iqbal Khan",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "Batsman",
    },
    {
      name: "Mushfiqur Rahim",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "Batsman",
    },
    {
      name: "Mahmudullah",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "All Rounder",
    },
    {
      name: "Litton Kumar Das",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "Batsman",
    },
    {
      name: "Soumya Sarkar",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "All Rounder",
    },
    {
      name: "Mehedi Hasan Miraz",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "All Rounder",
    },
    {
      name: "Taskin Ahmed",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "Baller",
    },
    {
      name: "Mustafizur Rahman",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "Baller",
    },
    {
      name: "Hasan Mahmud",
      country: "Bangladesh",
      profession: "Cricket",
      playerType: "Baller",
    },
  ];
  return (
    <>
      <div>
        <div>
          <Counter></Counter>
        </div>
        <div>
        <Todos></Todos>
        </div>
        <div>
          <ExternalUsers></ExternalUsers>
        </div>
        {players.map((player, index) => (
          <Person
            key={index}
            position={index}
            name={player.name}
            country={player.country}
            profession={player.profession}
            playerType={player.playerType}
          ></Person>
        ))}
        {/* <Person name="Mashrafee Bin Martuza" country="Bangladesh"></Person>
        <Person name="Hasan Mahmud" country="Bangladesh"></Person> */}
      </div>
    </>
  );
}

export default App;
