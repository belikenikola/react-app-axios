import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';


function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://catfact.ninja/fact").then(
      (response) => {
        setJoke(response.data.fact + "..." + response.data.length);
      }
    );
  }
  return (
    <div>
      Hello
      <button onClick={getJoke}>Get Joke</button>
      {joke}
    </div>
  );
}

export default App;
