import Gallery from "./Gallery.jsx";
import weeknd from "../../Assests/Images/weeknd.png";

function NowPlaying({loading , setLoading}){
    return <div className="text-white bg-black w-1/4 sticky top-0 h-lvh overflow-auto">
        <div className=" p-2 relative mb-8 ">
        <div className="absolute right-3 top-2 flex">
            <h1 className="text-white text-base font-bold p-2 px-4">{localStorage.getItem("user")}</h1>
            <img src={weeknd} alt="profile" className="w-6 boder-1 rounded-3xl" />
            </div>
         </div>
        <div className="flex text-base p-3 relative mb-3">
            <h1 className="font-bold absolute left-3">Now playing</h1>
            <h1 className="absolute right-3">View all</h1>
        </div>
        <Gallery loading={loading}  setLoading={setLoading} />
    </div>;

}

export default NowPlaying;