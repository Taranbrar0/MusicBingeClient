

function SongContainer( {song}){
    const {SongTitle,photo,duration,Artist,id} = song;
    return (
        <div className="bg-white w-48 text-black p-1 m-5">
            <img src={photo} alt={SongTitle} className=" w-48 h-38"/>
            <h1 className="text-xl text-center">{SongTitle}</h1>
            <span className="flex row space-x-20">
            <h1 className="text-neutral-400 text-sm">{Artist}</h1>
            <h1 className="text-neutral-400 text-sm">{duration}</h1>
            </span>
        </div>
    );
}

export default SongContainer;