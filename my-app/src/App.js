import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
   fetchCatFact();
  }, []);

  return (
    <div className="App">
      <h1>Cat Fact</h1>
      <button onClick={fetchCatFact}> Generate a New Cat Fact </button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
