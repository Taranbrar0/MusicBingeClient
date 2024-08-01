import { useEffect, useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserProfile(){
    const [email,setEmail]= useState("");
    const [dob,setDob]= useState('');
    const [gender,setGender] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const ApiPath = "https://musicbingeserver.onrender.com/api/user/"+localStorage.getItem('user');
        try{
        axios.get(ApiPath).then(res =>{
            const data = res.data[0];
            setEmail(data.email);
            setDob(data.dob);
            setGender(data.gender);
        })
        }
        catch(error){
            console.log(error);
        }

    });

   const deleteUser = ()=>{
        axios.delete("https://musicbingeserver.onrender.com/api/user/"+localStorage.getItem('user')).then((res)=>{
            toast.success(res.data);
        });
        setTimeout(()=>{
            navigate('/');
            localStorage.clear();
            window.location.reload();
        },1500);
        
   }


    return (
        <div className="bg-zinc-800 p-5 text-white h-screen relative">
            <Link to="/" ><button className="text-green-200">Close</button></Link>
            <div className="w-2/3 m-auto my-40 mx-auto">
            <div className="flex row my-5 center ">
                <FaUser className="text-9xl" />
                <h1 className="text-3xl bold  m-5">{localStorage.getItem('user')}</h1>
            </div>
            <h1 className="text-sm text-neutral-400 ">Email:</h1>
            <h1>{email}</h1>
            <h1 className="text-sm text-neutral-400 ">Date Of Birth</h1>
                <h1>{dob}</h1>
            <h1 className="text-sm text-neutral-400 ">Gender</h1>
            <h1>{gender}</h1>
            <h1 className="cursor-pointer bg-red-600 text-white w-28 p-1 rounded-lg mt-12 hover:scale-110 transition-transform" onClick={deleteUser}>Delete Account</h1>
        </div>
      </div>
    );
}

export default UserProfile;