import React from "react";
import "./App.css";

export default function Meaning(props) {
    return (
        <div>
        <h4> {props.meaning.partOfSpeech} </h4>
        {props.meaning.definitions.map (function (definition , index)
        {
            return (
                <div key={index}>
                    <p>
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                    </p>
                    </div>
            );
        })}
        </div>
    );
}