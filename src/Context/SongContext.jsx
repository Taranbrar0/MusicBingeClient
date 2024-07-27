// src/SongContext.js
import React, { createContext, useState, useContext } from 'react';

// Create Context
const SongContext = createContext();

// Create a Provider component
export const SongProvider = ({ children }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    return (
        <SongContext.Provider value={{ currentSongIndex, setCurrentSongIndex }}>
            {children}
        </SongContext.Provider>
    );
};

// Custom hook to use the SongContext
export const useSong = () => useContext(SongContext);
