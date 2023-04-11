import React, { useState, useEffect } from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const [Input, setInput] = useState(null);
  const navigate = useNavigate();

  const handleClear = (e) => {
    e.preventDefault();
    setInput("");
  };

  const handleAdd = (e) => {
    // e.preventDefault();
    setInput((...prev) => Number(...prev) + Number(Input));
  };
  const handleSub = () => {
    setInput((...prev) => Number(...prev) - Number(Input));
  };
  const handleMul = () => {
    setInput((...prev) => Number(...prev) * Number(Input));
  };
  const handleDiv = () => {
    setInput((...prev) => Number(...prev) / Number(Input));
  };

  return (
    <>
      <nav>
        <div className="Nav-Box">
          <button className="Nav-Title" onClick={() => navigate("/Portfolio")}>
            Portfolio
          </button>
          <button className="Nav-Title" onClick={() => navigate("/Calculator")}>
            Calculator
          </button>
          <button className="Nav-Title" onClick={() => navigate("/Rick&morty")}>
            Rick & morty
          </button>
        </div>
      </nav>
      <div className="Main-Calculator">
        <div className="Calculator-Container">
          <div className="Input-Container">
            <input
              className="Input"
              type="text"
              value={Input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="Number-Container">
            <div className="Number-Box">
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "7" : prev + "7"))}
              >
                7
              </button>
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "8" : prev + "8"))}
              >
                8
              </button>
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "9" : prev + "9"))}
              >
                9
              </button>
              <button className="operation" onClick={handleDiv}>
                /
              </button>
            </div>
            <div className="Number-Box">
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "4" : prev + "4"))}
              >
                4
              </button>
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "5" : prev + "5"))}
              >
                5
              </button>
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "6" : prev + "6"))}
              >
                6
              </button>
              <button className="operation" onClick={handleMul}>
                *
              </button>
            </div>
            <div className="Number-Box">
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "1" : prev + "1"))}
              >
                1
              </button>
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "2" : prev + "2"))}
              >
                2
              </button>
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "3" : prev + "3"))}
              >
                3
              </button>
              <button className="operation" onClick={handleSub}>
                -
              </button>
            </div>
            <div className="Number-Box">
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "0." : prev + "."))}
              >
                .
              </button>
              <button
                className="Number"
                onClick={() => setInput((prev) => (!prev ? "0" : prev + "0"))}
              >
                0
              </button>
              <button className="Number" onClick={handleClear}>
                clear
              </button>
              <button className="operation" onClick={handleAdd}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
