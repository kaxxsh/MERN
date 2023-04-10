import React, { useState } from "react";
import axios from "axios";

function App() {
  const [first, setfirst] = useState();
  const data = () => {
    const response = axios
      .get("https://api.github.com/users/hadley/orgs")
      .then((response) => setfirst(response.data));
    
    
  };
  return <>{data()}
    {first && first.map((item) => {
      return <div>{item.login}</div>;
    }
    )
  }
  </>;
}

export default App;
