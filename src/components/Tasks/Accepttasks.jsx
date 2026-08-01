import React from 'react'

const Accepttasks = ({data,updateTaskAccepting}) => {
  const updateComplete = () => {
    updateTaskAccepting(data.title,'completed');
  };
  const updateFailed = () => {
    updateTaskAccepting(data.title,'failed');
  };
  return (
    <div><div className='m-3 h-70 flex-nowrap shrink-0 rounded-2xl overflow-hidden bg-red-400 w-80'>
        {/* tasks details card*/}
        {/* top section */}
        <div className='flex items-center justify-between p-5 h-15'>
          <h1 className='bg-red-700 rounded-xl h-10 text-amber-200 text-2xl pl-2 pr-2 '>{data.category}</h1>
          <h3 className='text-2xl text-amber-100 underline'>{data.date}</h3>
        </div>
          {/* task heading and description */}
          <div className='h-55 flex justify-between flex-col w-full p-3'>
            <h1 className='text-white text-2xl font-bold'>{data.title}</h1>
            <p className='mt-4 text-amber-100 font-bold '>{data.description}</p>
            <div className='h-10 gap-3 w-full flex items-center justify-between cursor-pointer '>
            <button className='bg-green-400 h-9 text-2xl font-bold active:bg-emerald-900 rounded-2xl cursor-pointer w-full ' onClick={updateComplete}>Completed</button>
            <button className='bg-red-500 rounded-2xl text-xl font-bold h-9 active:bg-red-700 w-full cursor-pointer ' onClick={updateFailed}>Failed Task</button>
          </div>
          </div>
        </div></div>
  )
}
export default Accepttasks