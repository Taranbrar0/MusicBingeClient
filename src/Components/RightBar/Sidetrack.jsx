import weeknd from "./../../Assests/Images/weeknd.png";

function Sidetrack(){
    return <div className="flex space-x-8 p-3 relative">
        <img src={weeknd} alt="" className="w-8"/>
        <div>
            <h1>SongTitle</h1>
            <h1 className="text-sm">Artist</h1>
        </div>
        <h1 className="absolute right-2">3.:20</h1>
    </div>
}
export default Sidetrack;