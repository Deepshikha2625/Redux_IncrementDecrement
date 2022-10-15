import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.incrementNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <h1>Counter using redux</h1>
        <div className="quantity">
          <a
            className="minus"
            title="decrement"
            onClick={() => dispatch(decrement())}
          >
            <span> - </span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a
            className="plus"
            title="increment"
            onClick={() => dispatch(increment())}
          >
            <span> + </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
