import React, { useState, useEffect } from "react";
import "./Cards.css";

function Cards() {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");

  const handleresult = () => {
    if (first === second) {
      console.log("match");
    } else {
      console.log("not match");
    }
  };

  useEffect(() => {
    if (second !== "") handleresult();
  }, [second]);

  return (
    <div className="Card-Cointainer">
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("1");
          } else {
            setsecond("1");
          }
        }}
      >
        click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("2");
          } else {
            setsecond("2");
          }

          console.log("2");
        }}
      >
        Click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("1");
          } else {
            setsecond("1");
          }

          console.log("1");
        }}
      >
        Click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("5");
          } else {
            setsecond("5");
          }

          console.log("5");
        }}
      >
        Click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("3");
          } else {
            setsecond("3");
          }

          console.log("3");
        }}
      >
        Click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("4");
          } else {
            setsecond("4");
          }

          console.log("4");
        }}
      >
        Click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("3");
          } else {
            setsecond("3");
          }

          console.log("3");
        }}
      >
        Click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("4");
          } else {
            setsecond("4");
          }

          console.log("4");
        }}
      >
        Click
      </div>
      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("5");
          } else {
            setsecond("5");
          }

          console.log("5");
        }}
      >
        Click
      </div>

      <div
        className="Card-Box"
        onClick={() => {
          if (first === "") {
            setfirst("2");
          } else {
            setsecond("2");
          }
        }}
      >
        click
      </div>
      <div className="">
        <button
          onClick={() => {
            setfirst("");
            setsecond("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Cards;
