import { CiMenuBurger } from "react-icons/ci";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBar(){
    const [ShowSideBar,toggleSideBar]=useState(true);
    const navigate = useNavigate();
    const Logout= ()=>{
        localStorage.clear();
        navigate('/login');
        window.location.reload();
    }

    return  <div className="sticky top-0 h-lvh">
        <CiMenuBurger  onClick={()=>toggleSideBar(!ShowSideBar)} className="text-white m-2"/>
        <div  className={ShowSideBar?"bg-black w-36":"hidden"}>
            <div className="mb-50px text-lg text-white ml-3">
                <h1 className="text-xl font-bold underline mt-28">Main</h1>
                <h1>Artist</h1>
                <h1>New Realses</h1>
                <h1>Audio Books</h1>
            </div>


            <div className="mt-28 text-white text-lg ml-3">
                <h1 className="text-xl font-bold ">My music</h1>
                <h1>Tracks</h1>
                <h1>Albums</h1>
                <h1>Playlists</h1>
                <h1>Files</h1>
            </div>

            <div className="text-lg font-bold text-white mt-28 ml-3">
                <h1>Setting</h1>
                <h1 onClick={Logout}>Logout</h1>
            </div>
        </div>
    </div>;
}

export default SideBar;