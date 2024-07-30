import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import axios from 'axios';
import song1 from "../Assests/src/MusicFiles/1.mp3";
import song2 from "../Assests/src/MusicFiles/2.mp3";
import song3 from "../Assests/src/MusicFiles/3.mp3";
import song4 from "../Assests/src/MusicFiles/4.mp3";
import song5 from "../Assests/src/MusicFiles/5.mp3";
import song6 from "../Assests/src/MusicFiles/6.mp3";
import song7 from "../Assests/src/MusicFiles/7.mp3";
import song8 from "../Assests/src/MusicFiles/8.mp3";
import song9 from "../Assests/src/MusicFiles/9.mp3";
import { useSong } from '../Context/SongContext'; // Import the custom hook

const songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9];

function AudioControl() {
    const { currentSongIndex, setCurrentSongIndex } = useSong(1);
    const [audio, setAudio] = useState(new Audio(songs[currentSongIndex]));
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1); // Volume between 0 and 1
    const [progress, setProgress] = useState(0);
    const [title,setTitle]=useState("");
    const [hasInteracted,setHasInteracted] = useState(false);

    useEffect(() => {
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
        
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
        };
    }, [audio]);


    useEffect(() => {
        const newAudio = new Audio(songs[currentSongIndex]);
        newAudio.volume = volume;
        setAudio(newAudio);
        setCurrentTime(0);
        setProgress(0);
        setDuration(newAudio.duration);
        if(hasInteracted)
        {
            newAudio.play();
            setIsPlaying(true);
        }else{
            setHasInteracted(true);
        }
        
         //gets titile of song playing from server using get request
        axios.get("http://localhost:3500/api/songs/"+currentSongIndex).then((response)=>{
            setTitle(response.data[0].SongTitle);
        });
        return () => {
            newAudio.pause();
        };
    }, [currentSongIndex]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
        if(audio.currentTime===audio.duration){
            handleNextSong();
        }
    };

    const handleVolumeChange = (event) => {
        audio.volume = event.target.value;
        setVolume(event.target.value);
    };

    const handleClick = (e) => {
        const progressBar = e.currentTarget;
        const boundingRect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - boundingRect.left;
        const newProgress = (clickX / boundingRect.width) * 100;
        const newTime = (newProgress / 100) * duration;
        audio.currentTime = newTime;
        setProgress(newProgress);
        setCurrentTime(newTime);
    };

    const handleNextSong = () => {
        const nextSongIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextSongIndex);
    };

    const handlePreviousSong = () => {
        const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        setCurrentSongIndex(prevSongIndex);
    };

    return (
        <div className="bg-black h-28 sticky bottom-0 w-full opacity-85 ">
            <div className=" h-28 opacity-100" style={{ width: "100%" }}>
                <div className="flex flex-col items-center relative">
                    <div>
                        <button className='text-white py-2 focus:outline-none' onClick={handlePreviousSong}><CgPlayTrackPrev /></button>
                        <button
                            className="text-white py-2 px-4 rounded-full focus:outline-none"
                            onClick={handlePlayPause}
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                        <button className='text-white py-2 focus:outline-none' onClick={handleNextSong}><CgPlayTrackNext /></button>
                    </div>
                    
                    {/* container for progress bar */}
                    <div
                        className="relative w-2/3 h-1 bg-white rounded-full cursor-pointer"
                        onClick={handleClick}
                        style={{ background: `linear-gradient(to right, #808080 ${progress}%, #ffffff ${progress}%)` }}
                    >
                        {/* represents the progress */}
                        <div
                            className="absolute top-0 left-0 h-full bg-neutral-600 rounded-full"
                            style={{ width: `${progress}%` }}
                        />                        
                    </div>
                    
                    <div className="flex justify-between text-sm mt-2 w-3/4 text-white">
                        <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
                        <span>{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}</span>
                    </div>

                    <div className="flex flex-row items-center text-white absolute right-5 top-16">
                        <span className="text-white mx-2">Volume</span>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-28 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
             
                    <div className="text-white text-sm mt-2">{title}</div>
                    
                </div>
            </div>
        </div>
    );
}

export default AudioControl;
