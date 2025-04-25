import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const change=(e)=>{
    const {name,value}=e.target
    if(name==='name'){
      setName(value)
    }else if(name==='email'){
      setEmail(value)
    }else if(name==='password'){
      setPassword(value)
    }

  }

  const CreateAccount=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post('http://localhost:3000/user/',{
        name:name,
        email:email,
        password:password
      })
     
      localStorage.setItem('token',res.data.token)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <div className='bg-slate-200 p-8 rounded-lg shadow-2xl w-96 ' >
            <div className='flex flex-col justify-center items-center space-y-3 p-2 '>
                <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>SignUp</h1>
                <input className='bg-white rounded-2xl p-1 h-10 w-full ' type="text" placeholder='Username' name='name' value={name} onChange={change} />
                
                <input className='bg-white rounded-2xl p-1 h-10 w-full ' type="email" placeholder='email' name='email' value={email} onChange={change} />
                <input className='bg-white rounded-2xl p-1 h-10 w-full' type="password" placeholder='password' name='password' value={password} onChange={change} />
                <button className='bg-red-600 text-white rounded-2xl p-1  h-10 sm:w-1/2' onClick={CreateAccount}>Create Account</button>
            </div>
            <Link className='flex justify-center item-center text-blue-400' to={'/login'}>Already have an account</Link>
        </div>
        
    </div>
</div>
  )
}

export default Signup