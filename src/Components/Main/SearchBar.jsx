import { CiSearch } from "react-icons/ci";

function SearchBar(){
    return <div className="sticky top-0 z-10 bg-zinc-800">
            <div className="ml-20 mt-0 flex text-lg relative">
                <CiSearch className="absolute left-2 bottom-2"/>
                <input type="text" name="" id="" className="border-b-2 bg-transparent  border-white  w-3/4 p-1 px-8" placeholder="Search"/>
            </div>
        </div>;
}

export default SearchBar;