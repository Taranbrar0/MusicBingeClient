import SideBar from "./SideBar";
import Main from "./Main/Main";
import NowPlaying from "./RightBar/NowPlaying";
import { useState } from "react";
import Loader from "./Loader";


function Home(){
    const [loading, setLoading] = useState(false);
    // user change component from sidebar based on isMain 
    const [isMain,setMain]= useState(true);

    return (
    loading? <Loader />:
    <div className="flex row bg-black" >
        <SideBar isMain={isMain} setMain={setMain}/>
        <Main isMain={isMain} setMain={setMain} loading={loading} setLoading={setLoading}/>
        <NowPlaying loading ={loading} setLoading={setLoading}/>
    </div>);
}

export default Home;