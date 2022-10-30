import React, {useState} from "react";
import "./App.css";

export default function App() {
  let [keyword, setKeyword] = useState ("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`)
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


