import { useCallback, useReducer } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function nameReducer (state, action){
  switch (action.type) {
    case "Gerntleman":
      return `Gerntleman ${state}`;
    case "Mister":
      return `Mister ${state}`;
    case "Miss":
      return `Miss ${state}`;
    default:
      console.log("no entro");
  }
};

function App() {
  const [state, dispatch] = useReducer(nameReducer, "div");

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "Gerntleman" })}>
        Call me Gentkeman
      </button>
      <button onClick={() => dispatch({ type: "Mister" })}>
        Call me Mister
      </button>
      <button onClick={() => dispatch({ type: "Miss" })}>Call me Miss</button>
    </div>
  );
}

export default App;
