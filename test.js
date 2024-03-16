import { useState } from "react";

const MyForm = () => {
  const [number, setNewState] = useState(0);

  function addFive() {
    setNewState(number + 5);
    alert(number);
  }

  return (
    <>
      <button onClick={addFive}>+5</button>
      <h3>{number}</h3>
    </>
  );
};

export default MyForm;
