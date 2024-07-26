

function LogIn(){
    return(
        <div className="w-lvw h-lvh bg-zinc-800 overflow-hidden">
            <div className="w-3/5 bg-black p-5 h-5/6 text-white mx-auto my-5 rounded-xl">
            <h1 className="text-2xl font-bold text-center">Log in To Music Binge</h1>
            <div className="w-1/3 mx-auto my-5">
                <form action="">
                <h1>Email or Username</h1>
                <input type="text" name="name" id="name" className="p-2 bg-transparent border-2 border-neutral-400 my-3" style={{width:"100%"}} placeholder="Email or Username"/>
                <h1>Password</h1>
                <input type="password" name="password" id="password" style={{width:"100%"}} placeholder="Password"className="p-2 bg-transparent border-2 border-neutral-400 my-3" />
                <input type="submit" value="Login" className="bg-green-600 p-3 px-32 rounded-xl my-3 "/>
                </form>
            </div>
            <hr />
            <h1 className="w-1/3 mx-auto text-neutral-400 my-8">Donot have Account <span className="text-white underline" > <a href="/">Sign Up</a> </span> </h1>
            </div>

        </div>

    )
}

export default LogIn;