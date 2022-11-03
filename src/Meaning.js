import React from "react";
import "./App.css";

export default function Meaning(props) {
  console.log(props.meaning);
    return (
        <div>
        <h4> {props.meaning.partOfSpeech} </h4>
        {props.meaning.definitions.map (function (definition , index)
        {
            return (
                <div key={index}>
                    <div> <strong> Definition: </strong>
                        {definition.definition}
                        <br />
                         <em>{definition.example}</em>
                        <br />
                     <em>{definition.synonyms.map(function (synonym, index) {
                                return (
                                    <span className="me-2" key={index}> Synonyms: {synonym}
                                        </span>
                                    );
                            })}
</em>
                    </div>
                    </div>
            );
        })}
        </div>
    );

} 