import React from "react";
import { useState } from "react";
import Home from "./Home";
import Switch from "react-dom";
import { Route } from "react-router-dom";
import { Component } from "react";

function Signin(){
    let [isPassword,togglePassword] = useState(0);
    return(
        <div className="w-lvw h-lvh bg-black overflow-hidden">
            <div className="w-1/2 mx-auto p-28 px-44 text-white">
                <h1 className=" text-3xl font-bold">Sign up to Start Listening</h1>
                <form action="">
                    <div className={isPassword===0?"":"hidden"}>
                    <h1 className="text-base my-3">Email address</h1>
                    <input type="text" style={{width:"100%"}} placeholder="example@gmail.com" 
                    className="p-2 bg-transparent border-2 border-neutral-400 my-3"/>
                    </div>

                    <div className={isPassword===1?"":"hidden"}>
                    <h1 className="text-base my-3">Enter Password</h1>
                    <input type="password" name="password" id="password" style={{width:"100%"}} placeholder="Password"className={isPassword?"p-2 bg-transparent border-2 border-neutral-400 my-3":"hidden"} />
                    </div>

                    <div className={isPassword===2?"":"hidden"}>
                        <h1 className="text-lg">Tell us About yourself</h1>
                        <h1>Name</h1>
                        <h1 className="text-neutral-400 text-sm">This name show on your profile</h1>
                        <input type="text" name="name" id="name" className="p-2 bg-transparent border-2 border-neutral-400 my-3" style={{width:"100%"}}/>
                        <h1>Date of birth</h1>
                        <h1 className="text-sm text-neutral-400">Why do we need  <span className="text-white underline">date of birth?</span></h1>
                        <input type="date" name="" id="" className="p-2 bg-transparent border-2 border-neutral-400 my-3" style={{width:"100%"}} />
                        <h1>Gender</h1>
                        <h1 className="text-sm text-neutral-400">We use gender to personalize our songs</h1>
                        <div className="flex space-x-3">
                            <input type="radio" name="gender" id="male" />
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" />
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="no" />
                            <label htmlFor="no">Prefer not to say</label>
                        </div>
                    </div>

                    <button className={isPassword>1?"hidden":"bg-green-600 p-3 px-32 rounded-xl m-3 ml-12"} onClick={(event)=>{togglePassword(isPassword++);
                        event.preventDefault();
                    }}>Next</button>
                    <hr className="my-4"/>
                    <input type="submit" value="SignUp" className={isPassword===2?"bg-green-600 p-3 px-32 rounded-xl m-3 ml-12":"hidden"}
                    onClick={(e)=>{e.preventDefault();  }}/>
                    </form>
                <h1 className="text-base mx-2 inline-flex">If you already have an account !!!</h1>
                <h1 className="underline inline-flex"> <a href="/login">Log in</a></h1>
            </div>

        </div>
    )
};

export default Signin;