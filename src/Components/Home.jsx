import SideBar from "./SideBar";
import Main from "./Main/Main";
import NowPlaying from "./RightBar/NowPlaying";
import { useState } from "react";
import Loader from "./Loader";


function Home({loading,setLoading}){
    // user change component from sidebar based on isMain 
    const [isMain,setMain]= useState(true);

    return (
    loading ? <Loader />:
    <div className="flex row bg-black" >
        <SideBar isMain={isMain} setMain={setMain}/>
        <Main isMain={isMain} setMain={setMain} setLoading={setLoading}/>
        <NowPlaying />
    </div>);
}

export default Home;