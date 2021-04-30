const Counter = ({ counter, setCounter }) => {
  const handleMinus = () => {
    return setCounter(counter - 1);
  };

  const handlePlus = () => {
    return setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <p>{counter}</p>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Counter;
