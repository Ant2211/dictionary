import React from "react";
import Meaning from "./Meaning";
import "./App.css";

export default function Results(props) {
    if(props.results){
return(
    <div className="results"> 
    <section>
<h1 className="search-word"> {props.results.word} </h1>

<div> {props.results.phonetics.map(function (phonetic, index) {
    if(index < 1) {
    return (
        <div className="my-3" key={index}>
        <a href={phonetic.audio} target="_blank" rel="noreferrer" className="me-3">🔈</a>
           {phonetic.text}
        </div>
    );
}else{
    return null;
}
    
})} 
</div>
</section>
<section>
{props.results.meanings.map(function (meaning, index) {
    return (
        <div key={index}>
            <Meaning meaning={meaning} />
            </div>
    )
})}
</section>
    </div>
     
    );
    } else{
        return null;
    }
   
}