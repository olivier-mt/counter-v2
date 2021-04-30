import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

function App() {
  const [countersNumber, setCounterNumber] = useState([]);
  const [counter0, setCounter0] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

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
        if ((index = 0)) {
          tab.push(<Counter counter={counter0} setCounter={setCounter0} />);
        } else if ((index = 1)) {
          tab.push(<Counter counter={counter1} setCounter={setCounter1} />);
        } else if ((index = 2)) {
          tab.push(<Counter counter={counter2} setCounter={setCounter2} />);
        }
      })}
      {tab}
    </div>
  );
}

export default App;
