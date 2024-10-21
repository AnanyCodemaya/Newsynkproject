import React, { useState } from 'react'

const Login = ({handlelogin}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submithandler=(e)=>{
        e.preventDefault()
handlelogin(email,password)
setEmail('')
setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{submithandler(e)}} className='flex flex-col  items-center justiy-center'>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} required className='border-2 text-white bg-transparent outline-none border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white' type='text' placeholder='Enter the email' />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} required className='border-2 text-white bg-transparent outline-none border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white mt-3' type='password' placeholder='Enter the password'/>
                <button className='mt-3 border-2 text-white border-none outline-none bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login