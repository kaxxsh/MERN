import React, { useState, useEffect } from "react";

function Cards({ card, handleClick }) {
  const [Check, setCheck] = useState(false);
  const handleCards = () => {
    handleClick(card);
  };

  useEffect(() => {
    setTimeout(() => {
      setCheck(true);
    }, 1000);
  }, []);

  return (
    <div className="">
      <div className="card" onClick={handleCards}>
        <div className="">{Check ? "Click" : card}</div>
      </div>
    </div>
  );
}

export default Cards;
