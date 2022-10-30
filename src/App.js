import React, {useState} from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [keyword, setKeyword] = useState ("");

  function handleResponse(response){
console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`)

    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }
   function handleKeyword(event) {
    setKeyword(event.target.value);
    
   }
  return (
    <div className="App">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
    </div>
  );
}


