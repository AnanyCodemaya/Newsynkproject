import React from 'react'
import Alltask from './Alltask'

const CcreateTask = () => {
  return (
    <>
    <div className='p-5 mt-5 bg-[#1C1C1C]' rounded>
<form className='flex flex-wrap w-full b items-start  justify-between '>
<div className='w-1/2 '>
<div>
<h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
<input className='text-sm py-1 px-2 w-4/5 rounded outine-none ' type="text" placeholder="" />
</div>
<div className='pt-5'>
<h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
<input type="date" /></div>
<div className='pt-5'>
<h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
<input type="text" placeholder='Assign employee' /></div>
<div className='pt-5'>
<h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
<input type="text" placeholder='design' /></div>
</div>
<div className='w-2/5 flex flex-col items-start'>
<h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
<textarea name="" id="" cols="30" rows="10"></textarea></div>

<button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
</form>
</div>
<Alltask/>
</>
)
}

export default CcreateTask