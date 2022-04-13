import React, { useEffect, useState } from "react";
import "./Gallery.css";
import axios from "axios";

function Gallery({ id }) {
  const [images, setImages] = useState([]);
  const [imgAddress, setImageAddress] = useState(
    "https://i.pinimg.com/originals/b3/08/e9/b308e947f27f40583f56120793b176ae.jpg"
  );

  useEffect(() => {
    async function fetchPhotoData() {
      const request = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
      );
      setImages(request.data);
    }
    fetchPhotoData();
  }, []);
  return (
    <div className="galleryContainer">
      <div className="gallery">
        <div className="gallery-item">
          {images.map((e) => (
            <img
              src={e.thumbnailUrl}
              key={e.id}
              alt=""
              onClick={() => setImageAddress(e.url)}
            />
          ))}
        </div>
      </div>
      <div className="selected">
        <img src={imgAddress} width="250px" height="250px" />
      </div>
    </div>
  );
}

export default Gallery;
