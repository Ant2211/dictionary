import React from "react";
import Meaning from "./Meaning";
import "./App.css";

export default function Results(props) {
    if(props.results){
return(
    <div className="results"> 
<h1> {props.results.word} </h1>

<div> {props.results.phonetics.map(function (phonetics, index) {
    
    return (
        <div className="my-3" key={index}>
           <a href={phonetics.audio} target="_blank" rel="noreferrer" className="me-3">🔈</a>
           {phonetics.text}
            </div>
    );
    
})} 
</div>
{props.results.meanings.map(function (meaning, index) {
    return (
        <div key={index}>
            <Meaning meaning={meaning} />
            </div>
    )
})}
    </div>
    );
    } else{
        return null;
    }
}