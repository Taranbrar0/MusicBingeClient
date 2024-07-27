import SideBar from "./SideBar";
import Main from "./Main/Main";
import NowPlaying from "./RightBar/NowPlaying";
import { useState } from "react";


function Home(){
    const [isMain,setMain]= useState(true);
    return <div className="flex row bg-black" >
        <SideBar isMain={isMain} setMain={setMain}/>
        <Main isMain={isMain} setMain={setMain}/>
        <NowPlaying />
    </div>;
}

export default Home;