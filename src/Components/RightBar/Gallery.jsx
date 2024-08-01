import React, { useEffect, useState } from "react";
import Sidetrack from "./Sidetrack";
import axios from "axios";

function Gallery() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    axios.get('https://musicbingeserver.onrender.com/api/songs')
      .then(response => {
        setSongs(response.data); // response.data is an array of songs
      })
      .catch( (error) => {
        console.error('Error fetching songs:', error);
      })
  }, []);

  return (
    <div className="gallery-container">
      {songs.map(song => (
        <Sidetrack key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Gallery;
