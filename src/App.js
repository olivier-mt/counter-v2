import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

function App() {
  const [countersNumber, setCounterNumber] = useState([0, 0]);
  const [counter, setCounter] = useState(0);

  const handleOnclick = () => {
    const newCounterNumber = [...countersNumber];
    newCounterNumber.push(0);

    // J'essaie essaie ici de créer des nom de variable counter & setCounter personnalisté pour chaque state !

    return setCounterNumber(newCounterNumber);
  };

  console.log("counterNumber ===>", countersNumber);
  const tab = [];
  return (
    <div>
      <button onClick={handleOnclick}>Add counter</button>
      {countersNumber.map((elem, index) => {
        tab.push(<Counter counter={counter} setCounter={setCounter} />);
      })}
      {tab}
    </div>
  );
}

export default App;
