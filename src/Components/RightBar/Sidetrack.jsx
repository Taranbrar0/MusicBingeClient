import { FaPlay } from "react-icons/fa";
import { useSong } from '../../Context/SongContext'; // Import the custom hook

function Sidetrack({ song }) {
    const { id, SongTitle, Artist, photo } = song;
    const { setCurrentSongIndex } = useSong(); // Get the setter from the context

    return (
        <div
            className="flex space-x-8 p-3 relative hover:bg-slate-600 rounded-lg cursor-pointer group"
            onClick={() => {
                setCurrentSongIndex(id); // Set the current song index
                localStorage.setItem('song', id);
            }}
        >
            <div className="relative w-8 h-8">
                <img
                    src={photo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 linear group-hover:opacity-0"
                />
                <FaPlay className="absolute inset-0 w-full h-full text-white opacity-0 transition-opacity duration-300 linear group-hover:opacity-100 mt-1" />
            </div>
            <div>
                <h1>{SongTitle}</h1>
                <h1 className="text-sm text-gray-300">{Artist}</h1>
            </div>
            <h1 className="absolute right-2 text-gray-400">3:20</h1>
        </div>
    );
}

export default Sidetrack;
