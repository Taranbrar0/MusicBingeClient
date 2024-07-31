import React, { useEffect, useState } from "react";
import Sidetrack from "./Sidetrack";
import axios from "axios";

function Gallery(props) {
    const {loading, setLoading } = props;
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    
    // setLoading(true);
    axios.get('http://localhost:3500/api/songs')
      .then(response => {
        setSongs(response.data); // response.data is an array of songs
      })
      .catch( (error) => {
        console.error('Error fetching songs:', error);
      })
      .finally(()=>{
        // setTimeout(()=>{
        //    setLoading(false)
        //   console.log("After 1.5 seconds");
        // },1000);
      });
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
