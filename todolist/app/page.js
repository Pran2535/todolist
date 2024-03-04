"use client"
import React, { useState } from 'react'

const page = () => {
  const[title,settitle]=useState("");
  const[desc,setdesc]=useState("");
  const[mainTask,setMainTask]= useState([])
  const submithandler=(e)=>{
   e.preventDefault();
   setMainTask([...mainTask,{title,desc}])
   console.log(title);
   console.log(desc);
   settitle("");
   setdesc("");
    console.log(mainTask);
  }
let renderTask=<h2> no task available</h2>
if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
   return( <li className='flex items-center justify-between'>
    <div className='flex items-center text-2xl justify-between mb-5'>
    <h5 className='text-xl font-semibold'>
      {t.title}
    </h5>
    <h6>
      {t.desc}
    </h6>
   </div>;
   <button className='bg-red-400 px-4 py-4 text-white rounded font-bold'>
    Delete
   </button>
   </li>)
})
}
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5x1 font-bold text-center'>Pranav's todolist</h1>
   <form onSubmit={submithandler}>
    <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' 
   placeholder="enter title here "
   value={title}
   onChange={(e)=>{
      settitle(e.target.value)
   }}
    />
     <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='enter description here'
     value={desc}
     onChange={(e)=>{
      setdesc(e.target.value)
     }}
     />
     <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'> add task</button>
   </form>
   <hr/>
   <div className='p-8 bg-slate-200'>
 <ul>
  {renderTask}
 </ul>
   </div>
   </>
  )
}

export default page
