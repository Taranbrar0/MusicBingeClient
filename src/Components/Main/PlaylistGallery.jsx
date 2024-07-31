import PlaylistCard from "./PlaylistCard";
import axios from "axios";
import { useState, useEffect } from "react";

function PlaylistGallery({ setLoading }) {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        // Set loading state to true when the component mounts
        setLoading(true);

        // Fetch data from the API
        axios.get('http://localhost:3500/api/albums')
            .then(res => {
                setPlaylist(res.data);
                // Simulate a delay and then set loading to false
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to fetch data:", err);
                // Ensure to set loading to false in case of error
                setLoading(false);
            });

    }, [setLoading]);

    return (
        <div className="flex mt-12">
            {playlist.map(album => (
                <PlaylistCard key={album.id} album={album} />
            ))}
        </div>
    );
}

export default PlaylistGallery;
