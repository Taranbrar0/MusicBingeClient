import SideBar from "./SideBar";
import Main from "./Main/Main";
import NowPlaying from "./RightBar/NowPlaying";
function Home(){
    return <div className="flex row bg-black" >
        <SideBar/>
        <Main />
        <NowPlaying />
    </div>;
}

export default Home;