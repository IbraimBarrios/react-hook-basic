import { useCallback } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Gentelman");

  const changedName = useMemo(() => {
    return `Name: ${name}`;
  }, [name])

  const handleClick = useCallback(() => {
    setName("Paco");
  }, [name])

  return (
    <div className="App">
      <h1>{name}</h1>
      <ChangeName changedName={handleClick}/>      
      {changedName}
    </div>
  );
}

function ChangeName({ changedName }) {
  return (
    <div>
      <button onClick={changedName}>Click here to change name</button>
    </div>
  );
}

export default App;
