import weeknd from "../../Assests/Images/weeknd.png"

function ProfilePic(){
    return <div className=" p-2 relative mb-8 ">
        <div className="absolute right-3 top-2 flex">
            <h1 className="text-white text-base font-bold p-2 px-4">Taran B.</h1>
            <img src={weeknd} alt="profile" className="w-6 boder-1 rounded-3xl" />
            </div>
    </div>;
}

export default ProfilePic;