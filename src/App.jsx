import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Gentelman");

  useEffect(() => {
    console.log("Rendered");

    //termina el siclo de vida (solo se usa en siertos casos)
    return () => {};
  }, [name]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName("Paco");
        }}
      >
        Click here to change name
      </button>
    </div>
  );
}

export default App;
