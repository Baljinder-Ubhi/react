import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  //  let counter = 5;

  const addValue = () => {
    if (counter >= 10) {
      alert("Counter value cannot be greater than 10");
      return;
    }
    setCounter(counter + 1);
  };

  const subtractValue = () => {
    if (counter <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React With `Ubhi`</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increment {counter}</button>
      <button onClick={subtractValue}>Decrement {counter}</button>
    </>
  );
}

export default App;
