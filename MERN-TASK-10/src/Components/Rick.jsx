import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Rick() {
  const [Data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?count=200")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <div className="Rick-Cointainer">
        <div className="title">
          <h1>Rick and Morty</h1>
        </div>
        <div className="char-container">
          {Data?.map((character) => (
            <div key={character.id}>
              <div className="charBox">
                <img src={character.image} alt="" />
                <p>Name: {character.name}</p>
                <p>Gender: {character.gender}</p>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Rick;
