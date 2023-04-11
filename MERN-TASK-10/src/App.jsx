import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      
      <nav className="App-Contianer">
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
      <section>
        <div className="App-Container">
          <div className="MERN">
            MERN TASK
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
