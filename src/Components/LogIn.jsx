import { useState } from "react";
import axios from "axios";
import { Link,Navigate,useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

    const validate = () => {
        axios.post("https://musicbingeserver.onrender.com/api/login", {
            name,
            password
        })
        .then(response => {
            const data = response.data;
            if (data.success) {
                toast.success(`${data.user} logged in`);
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", data.user);
                setTimeout(() => {
                    navigate('/');
                    window.location.reload();
                }, 3000);
                
            } else {
                setTimeout(() => {
                    toast.error(data.message);
                }, 2000);
            }
        })
        .catch(error => {
            toast.error("An error occurred. Please try again.");
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validate();
    };

    return (
        <div className="w-lvw h-lvh bg-zinc-800 overflow-hidden relative">
            <div className="w-3/5 bg-black p-5 h-5/6 text-white mx-auto my-5 rounded-xl">
                <h1 className="text-2xl font-bold text-center">Log in To Music Binge</h1>
                <div className="w-1/3 mx-auto my-5">
                    <form onSubmit={handleSubmit}>
                        <h1>Email or Username</h1>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="p-2 bg-transparent border-2 border-neutral-400 my-3" 
                            style={{ width: "100%" }} 
                            placeholder="Email or Username" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name}
                        />
                        <h1>Password</h1>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            style={{ width: "100%" }} 
                            placeholder="Password"  
                            className="p-2 bg-transparent border-2 border-neutral-400 my-3" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}
                        />
                        <input 
                            type="submit" 
                            value="Login" 
                            className="bg-green-600 p-3 px-32 rounded-xl my-3 cursor-pointer"
                        />
                    </form>
                </div>
                <hr />
                <h1 className="w-1/3 mx-auto text-neutral-400 my-8">
                    Don’t have an account? 
                    <span className="text-white underline"> 
                        <Link to="/signUp">Sign Up</Link> 
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default LogIn;
