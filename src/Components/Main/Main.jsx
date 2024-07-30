import { GiPlayButton } from "react-icons/gi";
import BilleImage from "../../Assests/Images/coverPhoto.png"
import PlaylistGallery from "./PlaylistGallery";
import Songs from "./Songs";
import SearchBar from "./SearchBar";
import AudioControl from "../AudioControls";
import SongContainer from "../MyMusic/SongContainer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MyMusicGallery from "./MyMusicGallery";

const Normal = ({loading, setLoading}) =>(
    <>
 
         <h1 className="text-2xl font-bold ">Main</h1>
         <div className="bg-amber-600 w-2/3 p-5 rounded-xl flex h-44  mt-10 relative mx-auto">
            <div>
                <h1>Billie Ellish</h1>
                <h2 className="text-lg font-bold">What Was I Made For?</h2>
                <h1 className="flex row bg-white text-black p-2 rounded-2xl mt-6"><GiPlayButton className="mx-2 my-1" /> Listen now</h1>
            </div>
            <div className="ml-20 ">
                <img src={BilleImage} alt="Billie Ellish" className="w-48 absolute bottom-0 right-1"/>
            </div>
        </div>
        <div>
            <div className="flex text-lg font-bold relative">
                <h1 className="absolute left-5">Playlists for you</h1>
                <h1 className="absolute right-5 text-base font-normal">View all</h1>
            </div>
            <div>
                <PlaylistGallery />
                <Songs loading={loading}  setLoading={setLoading}/>
            </div>
        </div>
    </>
);


function Main( {isMain, loading , setLoading} ){

    return (
        <div className=" w-3/4 relative" >
            <div className="text-white bg-zinc-800 p-5  border-l-2 border-zinc-800 rounded-3xl">
                <SearchBar />
                {isMain? <Normal loading={loading} setLoading={setLoading} /> : < MyMusicGallery />
                }
            </div>
             <AudioControl />
        </div>
    );
}

export default Main;