import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin(){
    let [isPassword,togglePassword] = useState(0);

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');


    const addUser =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3500/api/signup",{
            "name":name,
            "password":password,
            "email":email,
            "dob":dob,
            "gender":gender
        }).then(function(response){
            const data = response.data;
            if(data.success){
                toast.success("Signing in for "+name);
                localStorage.setItem("token",data.token);
                localStorage.setItem("user",data.user);
                setTimeout(()=>{
                    navigate('/');
                    window.location.reload();
                },3000);
                
                
            }
            else{
                alert(response.data.message);
            }
        })
    };

    return(
        <div className="w-lvw h-lvh bg-black overflow-hidden">
            <div className="w-1/2 mx-auto p-28 px-44 text-white">
                <h1 className=" text-3xl font-bold">Sign up to Start Listening</h1>
                <form onSubmit={addUser}>
                    <div className={isPassword===0?"":"hidden"}>
                    <h1 className="text-base my-3">Email address</h1>
                    <input type="text" style={{width:"100%"}} placeholder="example@gmail.com" 
                    className="p-2 bg-transparent border-2 border-neutral-400 my-3" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className={isPassword===1?"":"hidden"}>
                    <h1 className="text-base my-3">Enter Password</h1>
                    <input type="password" name="password" id="password" style={{width:"100%"}} placeholder="Password"className={isPassword?"p-2 bg-transparent border-2 border-neutral-400 my-3":"hidden"} 
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <div className={isPassword===2?"":"hidden"}>
                        <h1 className="text-lg">Tell us About yourself</h1>
                        <h1>Name</h1>
                        <h1 className="text-neutral-400 text-sm">This name show on your profile</h1>
                        <input type="text" name="name" id="name" className="p-2 bg-transparent border-2 border-neutral-400 my-3" style={{width:"100%"}}
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                        <h1>Date of birth</h1>
                        <h1 className="text-sm text-neutral-400">Why do we need  <span className="text-white underline">date of birth?</span></h1>
                        <input type="date" name="dob" id="dob" className="p-2 bg-transparent border-2 border-neutral-400 my-3" style={{width:"100%"}} 
                        value={dob} onChange={(e)=>setDob(e.target.value)}/>
                        <h1>Gender</h1>
                        <h1 className="text-sm text-neutral-400">We use gender to personalize our songs</h1>
                        <div className="flex space-x-3">
                            <input type="radio" name="gender" id="male" onClick={()=>setGender('Male')}/>
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" onClick={()=>setGender('Female')}/>
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="no" onClick={()=>setGender('Not Provided')} />
                            <label htmlFor="no">Prefer not to say</label>
                        </div>
                    </div>

                    <div className={isPassword>1?"hidden":"w-32 bg-green-600 p-3 rounded-xl m-3 pl-12 ml-32 cursor-pointer"} onClick={(event)=>{togglePassword(isPassword++);
                        event.preventDefault();
                    }}>Next</div>
                    <hr className="my-4"/>
                    <input type="submit" value="submit" className={isPassword===2?"bg-green-600 p-3 px-32 rounded-xl m-3 ml-12 cursor-pointer":"hidden"} />                    
                    </form>
                <h1 className="text-base mx-2 inline-flex">If you already have an account !!!</h1>
                <h1 className="underline inline-flex"> <Link to="/login">Login</Link></h1>
            </div>
            <ToastContainer />
        </div>
    )
};

export default Signin;