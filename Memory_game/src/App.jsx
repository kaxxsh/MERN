import React, { useEffect, useState } from "react";
import Cards from "./Components/cards";

const numbers = [1, 2, 3, 4, 5];

function App() {
  const [shuffcard, setshuffcard] = useState([]);
  const [first, setfirst] = useState(null);
  const [second, setsecond] = useState(null);

  const handlecards = () => {
    const Cards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ card, id: Math.random() }));
    setshuffcard(Cards);
  };

  const handleClick = (card) => {
    first ? setsecond(card) : setfirst(card);
  };

  const handleresult = () => {
    if (first && second) {
      if (first === second) {
        console.log("Match");
      } else {
        console.log("Not Match");
      }
      setfirst(null);
      setsecond(null);
    }
  };

  useEffect(() => {
    handleresult();
  }, [second]);

  return (
    <>
      <button onClick={handlecards}>Shuffle</button>
      <div className="Cards">
        {shuffcard.map((card) => (
          <Cards card={card.card} key={card.id} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default App;
