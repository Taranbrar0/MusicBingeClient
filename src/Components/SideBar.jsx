import { CiMenuBurger } from "react-icons/ci";
import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function SideBar( { isMain, setMain } ){
    const [ShowSideBar,toggleSideBar]=useState(true);
    const navigate = useNavigate();
    const Logout= ()=>{
        const name = localStorage.getItem('user');
        toast.success(name+" logged out succesfully");
        localStorage.clear();
        setTimeout(()=>{
            window.location.reload();
        },2500);
        
    }

    return  <div className="sticky top-0 h-lvh">
        <CiMenuBurger  onClick={()=>toggleSideBar(!ShowSideBar)} className="text-white m-2 cursor-pointer"/>
        <div  className={ShowSideBar?"bg-black w-36":"hidden"}>
            <div className="mb-50px text-lg text-white ml-3 ">
                <h1 className={isMain? "text-xl font-bold underline mt-28 cursor-pointer": "text-xl font-bold mt-28 cursor-pointer"} onClick={()=>setMain(true)}>Main</h1>
                <h1 className="opacity-40 ">Artist</h1>
                <h1 className="opacity-40">New Realses</h1>
                <h1 className="opacity-40">Audio Books</h1>
            </div>


            <div className="mt-28 text-white text-lg ml-3 ">
                <h1 className={isMain? "text-xl font-bold cursor-pointer":"text-xl font-bold underline cursor-pointer"} onClick={()=>setMain(false)}>My music</h1>
                <h1 className="opacity-40 ">Tracks</h1>
                <h1 className="opacity-40 ">Albums</h1>
                <h1 className="opacity-40 ">Playlists</h1>
                <h1 className="cursor-pointer" onClick={()=> navigate('/Documentation')} > Documentation</h1>
            </div>

            <div className="text-lg font-bold text-white mt-28 ml-3">
                <h1 className="opacity-40">Setting</h1>
                <h1 onClick={Logout} className="cursor-pointer">Logout</h1>
            </div>
        </div>
        
    </div>;
}

export default SideBar;