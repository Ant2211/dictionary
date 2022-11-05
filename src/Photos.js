import React from "react";
import "./App.css";

export default function Photos(props) {
    if(props.photos) {
        return (
<section className="photos">
    <div className="row">
        
    {props.photos.map(function (photo, index) {
        return (
        <div className="col-4">
            <a href={photo.src.original} target="_blanc">
<img src={photo.src.landscape} key={index} className="photo img-fluid" />
</a>
      </div>  );
    })}

</div>
</section>
        )
    } else {
        return null;
    }
}