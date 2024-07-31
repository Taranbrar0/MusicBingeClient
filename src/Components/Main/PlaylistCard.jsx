import React, { useState, useEffect } from "react";
import weeknd from "../../Assests/Images/weeknd.png";

function PlaylistCard({ album }) {
    const { id, songs, name } = album;

    const [color, setColor] = useState('#000000');

    useEffect(() => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor('#' + randomColor);
    }, []);

    return (
        <div 
            className="w-40 rounded-xl mx-2 relative overflow-hidden pl-2 cursor-pointer hover:scale-110 transition-transform cursor-not-allowed" 
            style={{ backgroundColor: color }}
        >
            <h1 className="absolute top-2 ">{name}</h1>
            <img src={weeknd} alt="weeknd" className="w-28 relative left-12" />
            <h1 className="text-base font-bold absolute left-1 bottom-2">{songs.length} tracks</h1>
        </div>
    );
}

export default PlaylistCard;
