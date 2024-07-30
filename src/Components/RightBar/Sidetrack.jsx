import { FaPlay, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useSong } from '../../Context/SongContext'; // Context to keep record of songs playing currently

function Sidetrack({ song }) {
    const { id, SongTitle, Artist, photo, duration, liked } = song;
    const { setCurrentSongIndex } = useSong(); // Get the setter from the context

    // Initialize state for the liked status
    const [isLiked, setIsLiked] = useState(liked);

    // Effect to sync state with localStorage
    useEffect(() => {
        const likedSongs = JSON.parse(localStorage.getItem('like')) || [];
        setIsLiked(likedSongs.includes(id));
    }, [id]);

    const addLike = () => {
        const likedSongs = JSON.parse(localStorage.getItem('like')) || [];
        if (!likedSongs.includes(id)) {
            likedSongs.push(id);
            localStorage.setItem('like', JSON.stringify(likedSongs));
            setIsLiked(true);
        }
    };

    const removeLike = () => {
        const likedSongs = JSON.parse(localStorage.getItem('like')) || [];
        const updatedLikes = likedSongs.filter(songId => songId !== id);
        localStorage.setItem('like', JSON.stringify(updatedLikes));
        setIsLiked(false);
    };

    return (
        <div className="flex space-x-8 p-3 relative hover:bg-slate-600 rounded-lg cursor-pointer group">
            <div
                className="relative w-8 h-8"
                onClick={() => setCurrentSongIndex(id % 9)} // Set the current song index
            >
                <img
                    src={photo}
                    alt={SongTitle}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 linear group-hover:opacity-0"
                />
                <FaPlay className="absolute inset-0 w-full h-full text-white opacity-0 transition-opacity duration-300 linear  mt-1 group-hover:opacity-100" />
            </div>
            <div>
                <h1>{SongTitle}</h1>
                <h1 className="text-sm text-gray-300">{Artist}</h1>
            </div>
            <div className="absolute right-12 mt-3">
                {isLiked ?(
                    <FaHeart className="text-red-500" onClick={removeLike} />
                ): (
                    <CiHeart className="text-white" onClick={addLike} />
                )}
            </div>
            <h1 className="absolute right-2 text-gray-400 mt-2">{duration}</h1>
        </div>
    );
}

export default Sidetrack;
