import React from "react";
import "./PhotoCollection.css";
import MainTitle from "./MainTitle";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

function PhotoCollection() {
  const location = window.location.href;
	const last = location.split("/");
	const id = last[last.length - 1];

  return (
    <div className="photoCollection">
      <div className="container">
        <MainTitle />

        <div>
          <div className="scroll">
            <Gallery id={id} />
          </div>
        </div>
        <Link to="/"className="buttonBack" ><span>Home Page</span></Link>
      </div>
      
    </div>
  );
}

export default PhotoCollection;
