import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSignIn=(e)=>{
        e.preventDefault();
        if(email===''||password===''){
            toast.error("Please fill all fields!")
        }
        else{
            fetch(`http://localhost:5059/api/AdminUser?pass=${password}&email=${email}`)
            .then((response) => response.json())
            .then((json) => {
            if(json.length>0){
                toast.success("Logged in");
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('login_id',json[0].id)
                navigate(`/overview`); 
            }
            else{
                toast.error("Incorrect credentials");
            }
            });
        }
        }
  return (
    <div>
        <div className='text-white h-[100vh] flex justify-center items-center'>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter
            backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-white font-bold text-center mb-6'>Sign In</h1>
                <form>
                    <div className='relative my-8'>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='block w-80 py-3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-white focus:border-purple-600 peer' placeholder=''/>
                        <label className='absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Email</label>
                    </div>
                    <div className='relative my-8'>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='block w-80 py-3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-white focus:border-purple-600 peer' placeholder=''/>
                        <label className='absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Password</label>
                    </div>
                    <button type="submit" onClick={handleSignIn} className='w-full mb-4 text-[20px] mt-6 rounded-full bg-white text-purple-800 hover:bg-purple-600 hover:text-white py-2 transition-colors duration-300'>Sign In</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage