import React from "react";
import { Link } from "react-router-dom";
import "./AlbumItem.css";

function AlbumItem({ title, id }) {
  return (
    <div className="list-item-container">
      <Link to={`/album/${id}`} className="list-item">
        {title}
      </Link>
    </div>
  );
}

export default AlbumItem;