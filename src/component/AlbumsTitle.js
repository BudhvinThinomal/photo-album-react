import React, { useState, useEffect } from "react";
import "./AlbumsTitle.css";
import axios from "axios";
import AlbumItem from "./AlbumItem";
import MainTitle from "./MainTitle";

const fetchAlbumData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/albums")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

function AlbumsTitle() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbumData().then((apiAlbums) => {
      setAlbums(apiAlbums);
    });
  }, []);

  return (
    <div className="albumsTitle">
      <div className="container">
        <MainTitle />
        <div className="list-container">
          {albums.map((e) => (
            <AlbumItem title={e.title} key={e.id} id={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumsTitle;
