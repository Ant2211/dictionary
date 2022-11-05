import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./App.css";

export default function App() {
  let [keyword, setKeyword] = useState ("");
  let [results, setResults] = useState (null);
  let [photos, setPhotos] = useState (null);

  function handleResponse(response){
setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    

    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelApiKey = "563492ad6f91700001000001fbf2205c043048619fc0ba98649a298c";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelApiUrl, {headers: { Authorization: `Bearer ${pexelApiKey}`},}).then(handlePexelResponse);
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
      <Photos photos={photos} />
      <Results results={results} />

    </div>
  );
}


