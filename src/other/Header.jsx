import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-bold'>Anany</span></h1>
        <button className='bg-red-500 p-[10px]text-white  px-5 py-3 rounded-xl'>Log out</button>
    </div>
  )
}

export default Header