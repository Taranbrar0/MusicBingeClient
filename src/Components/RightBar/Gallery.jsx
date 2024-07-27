import Sidetrack from "./Sidetrack";
import axios from "axios";
import { useEffect, useState } from "react";

function Gallery(){
    const [songs,setSongs]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3500/api/songs').then(response => {
            setSongs(response.data);    // Assuming response.data is an array of songs
        })
    },[]);

    return <div className="">
        {songs.map(song => (
                <Sidetrack key={song.id} song={song} />
            ))}
        
    </div>;
}

export default Gallery;