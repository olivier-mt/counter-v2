const Counter = ({ countersTab, setCounterNumber, i }) => {
  const handleMinus = () => {
    const newTab = [...countersTab];
    newTab[i] = countersTab[i] - 1;

    return setCounterNumber(newTab);
  };

  const handlePlus = () => {
    const newTab = [...countersTab];

    newTab[i] = countersTab[i] + 1;

    return setCounterNumber(newTab);
  };

  const handleReset = () => {
    const newTab = [...countersTab];
    newTab[i] = 0;
    return setCounterNumber(newTab);
  };

  return (
    <div>
      {countersTab[i] > 0 && <button onClick={handleMinus}>-</button>}

      <p>{countersTab[i]}</p>
      {countersTab[i] < 10 && <button onClick={handlePlus}>+</button>}

      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Counter;
