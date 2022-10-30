import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Gentelman");
  const refButton = useRef(null);

  useEffect(() => {
    console.log("Rendered");
    if (name != "Gentelman") {
      refButton.current.style.color = "red";
    }

    //termina el siclo de vida (solo se usa en siertos casos)
    return () => {};
  }, [name]);

  const handleClick = () => {
    setName("Paco");
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <button ref={refButton} onClick={handleClick}>
        Click here to change name
      </button>
      <button onClick={() => refButton.current.click()}>
        Click here to click the other button change the name
      </button>
    </div>
  );
}

export default App;
