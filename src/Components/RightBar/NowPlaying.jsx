import Gallery from "./Gallery.jsx"
import ProfilePic from "./ProfilePic.jsx";

function NowPlaying(){
    return <div className="text-white bg-black w-1/4 sticky top-0 h-lvh">
        <ProfilePic />
        <div className="flex text-base p-3 relative mb-3">
            <h1 className="font-bold absolute left-3">Now playing</h1>
            <h1 className="absolute right-3">View all</h1>
        </div>
        <Gallery />
    </div>;

}

export default NowPlaying;