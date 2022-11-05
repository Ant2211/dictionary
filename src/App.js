import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import "./App.css";

export default function App() {
  let [keyword, setKeyword] = useState ("");
  let [results, setResults] = useState (null);

  function handleResponse(response){
setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    

    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }
   function handleKeyword(event) {
    setKeyword(event.target.value);
    
   }
  return (
    <div className="App container-fluid">
      <section>
      <form onSubmit={search}>
        <input type="search" placeholder="enter a word" className="input" onChange={handleKeyword} />
      <h6 className="suggested-word">Suggested words: water, sun, earth etc </h6>
      </form>
      </section>
      <Results results={results} />
    </div>
  );
}


