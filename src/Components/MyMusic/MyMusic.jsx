import axios from "axios";
import SideBar from "../SideBar";
import NowPlaying from "../RightBar/NowPlaying";
import { useState, useEffect } from "react";
import SongContainer from "./SongContainer";

function MyMusic() {
    const [songDetails, setSongDetails] = useState([]);
    const [likedSongs, setLikedSongs] = useState([]);

    useEffect(() => {
        const response = localStorage.getItem('like');
        if (response) {
            setLikedSongs(JSON.parse(response));
        }
    }, []);

    useEffect(() => {
        if (likedSongs.length > 0) {
            let songData = [];
            let completedReq = 0;

            likedSongs.forEach(songId => {
                axios.get(`http://localhost:3500/api/songs/${songId}`)
                    .then(res => {
                        songData.push(res.data[0]);
                        completedReq++;

                        // Check if all requests are completed
                        if (completedReq === likedSongs.length) {
                            setSongDetails(songData);
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching song", error);
                        completedReq++;

                        // Ensure state update even if there's an error
                        if (completedReq === likedSongs.length) {
                            setSongDetails(songData);
                        }
                    });
            });
        } else {
            // Handle the case where there are no liked songs
            setSongDetails([]);
        }
    }, [likedSongs]);

    return (      
        <div className="flex row bg-black">
            {/* <SideBar /> */}
            <div className="w-2/3 bg-zinc-800 text-white p-5">
                {songDetails.length > 0 ? (
                    songDetails.map(song => (
                        <SongContainer key={song.id} song={song}  className="grid col-span-3 "/>
                    ))
                ) : (
                    <h1>No Liked Songs</h1>
                )}
            </div>
            <NowPlaying />
        </div>
    );
}

export default MyMusic;
