import PlaylistCard from "./PlaylistCard";
import axios from "axios";
function PlaylistGallery(){
    let playlists=[];
     axios.get('http://localhost:3500/api/albums').then(res=>{
        playlists=res.data;
     })


    return <div className="flex mt-12">
        
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
    </div>;
}

export default PlaylistGallery;