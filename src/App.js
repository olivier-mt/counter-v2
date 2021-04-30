import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

function App() {
  const [countersTab, setCounterNumber] = useState([]);
  const [counter, setCounter] = useState(0);

  console.log("counterTabs ===>", countersTab);
  const handleOnclick = () => {
    const newCounterNumber = [...countersTab];
    newCounterNumber.push(0);

    return setCounterNumber(newCounterNumber);
  };

  console.log("counterNumber ===>", countersTab);
  const tab = [];
  return (
    <div>
      {countersTab.length < 3 && (
        <button onClick={handleOnclick}>Add counter</button>
      )}

      {countersTab.map((elem, index) => {
        tab.push(
          <Counter
            counter={counter}
            setCounter={setCounter}
            countersTab={countersTab}
            setCounterNumber={setCounterNumber}
            i={index}
          />
        );
      })}
      {tab}
    </div>
  );
}

export default App;
