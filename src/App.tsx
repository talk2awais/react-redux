import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ActionName,
  addNumber,
  IInitialState,
  minusNumber,
  resetAll,
} from "./utills/redux/action";

function App() {
  const { ADD_ONE } = ActionName;
  const dispatch = useDispatch();
  const { number } = useSelector((value: IInitialState) => value);
  return (
    <div className="App">
      <div>
        <p>{number ? number : "0"}</p>
        <button onClick={() => dispatch(addNumber(10))}>ADD 10</button>
        <button onClick={() => dispatch(minusNumber(10))}>Minus 10</button>
        <button onClick={() => dispatch(resetAll())}>Reset ALL</button>
      </div>
    </div>
  );
}

export default App;
