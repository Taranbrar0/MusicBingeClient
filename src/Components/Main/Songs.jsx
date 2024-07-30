import Gallery from "../RightBar/Gallery";
function Songs({loading , setLoading}){
    return <div className="my-12" >
        <div className="flex relative">
            <h1 className="text-lg font-bold absolute left-5">You may also like</h1>
            <h1 className="text-lg absolute right-5 font-normal">View all</h1>
        </div>
        <div className="grid grid-cols-2">
                <div className="py-8 px-2">
                    <Gallery loading={loading} setLoading={setLoading} />
                </div>
                <div className="py-8 px-2">
                    <Gallery loading= {loading} setLoading={setLoading} />
                </div>
        </div>
    </div>;
}

export default Songs;