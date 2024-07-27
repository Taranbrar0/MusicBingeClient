import { GiPlayButton } from "react-icons/gi";
import BilleImage from "../../Assests/Images/billieCover.png"
import PlaylistGallery from "./PlaylistGallery";
import Songs from "./Songs";
import SearchBar from "./SearchBar";
import AudioControl from "../AudioControls";
import SongContainer from "../MyMusic/SongContainer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Normal = () =>(
    <>
        <h1 className="text-2xl font-bold ">Main</h1>
        <div className="bg-green-900 w-2/3 p-5 rounded-xl flex h-44  mt-10 relative mx-auto">
            <div>
                <h1>Billie Ellish</h1>
                <h2 className="text-lg font-bold">What Was I Made For?</h2>
                <h1 className="flex row bg-white text-black p-2 rounded-2xl mt-6"><GiPlayButton className="mx-2 my-1" /> Listen now</h1>
            </div>
            <div className="ml-20 ">
                <img src={BilleImage} alt="Billie Ellish" className="w-28 absolute bottom-0 right-1"/>
            </div>
        </div>
        <div>
            <div className="flex text-lg font-bold relative">
                <h1 className="absolute left-5">Playlists for you</h1>
                <h1 className="absolute right-5 text-base font-normal">View all</h1>
            </div>
            <div>
                <PlaylistGallery />
                <Songs />
            </div>
        </div>
    </>
);

const MyMusic = () =>(
    // for favorite music

    <>
    {/* {songDetails.length > 0 ? (
                    songDetails.map(song => (
                        <SongContainer key={song.id} song={song}  className="grid  "/>
                    ))
                ) : (
                    <h1>No Liked Songs</h1>
                )} */}
    </>
);

function Main( {isMain} ){
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
        <div className=" w-3/4 " >
            <div className="text-white bg-zinc-800 p-5  border-l-2 border-zinc-800 rounded-3xl min-h-950px">
                <SearchBar />
                {isMain? <Normal /> :
                <div className=" bg-zinc-800">
                {songDetails.length > 0 ? (
                    songDetails.map(song => (
                        <SongContainer key={song.id} song={song}  className="grid  "/>
                    ))
                ) : (
                    <h1>No Liked Songs</h1>
                )}
                </div> }
       </div>
    <AudioControl/>
    </div>
    );
}

export default Main;