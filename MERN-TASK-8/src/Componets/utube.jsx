import React from "react";


function utube() {
  const [Suscribe, setSuscribe] = useState(null);
  const [Print, setPrint] = useState("Welcome");
  const [Name, setName] = useState("Subscribe");

  const handleSubscribe = () => {
    if (Suscribe === null) {
      setSuscribe(true);
      setPrint("You are Subscribed");
      setName("Subscribed");
    } else if (Suscribe === true) {
      setSuscribe(false);
      setPrint("You are Unsubscribed");
      setName("Unsubscribe");
    } else if (Suscribe === false) {
      setSuscribe(null);
      setPrint("Welcome");
      setName("Subscribe");
    }
  };
  return (
    <>
      <div className="Suscribe">
        <div className="">MERN YOUTUBE CHANNEL</div>
        <button onClick={handleSubscribe}>{Name}</button>
        <div className="">{Print}</div>
      </div>
    </>
  );
}

export default utube;
