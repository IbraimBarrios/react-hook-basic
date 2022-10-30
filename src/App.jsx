import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Gentelman");

  // useEffect(() => {
  //   console.log("Rendered");
  //   if (name != "Gentelman") {
  //     refButton.current.style.color = "red";
  //   }

  //   //termina el siclo de vida (solo se usa en siertos casos)
  //   return () => {};
  // }, [name]);

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
