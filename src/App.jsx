import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Gentelman");

  const changedName = useMemo(() => {
    return `Name: ${name}`;
  }, [name])

  const handleClick = () => {
    setName("Paco");
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>
        Click here to change name
      </button>
      {changedName}
    </div>
  );
}

export default App;
