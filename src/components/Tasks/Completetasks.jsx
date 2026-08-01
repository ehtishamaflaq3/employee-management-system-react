import React from 'react'

const Completetasks = ({data,loggedinUserdata}) => {  
  return (
    <div><div className='m-3 h-70 flex-nowrap shrink-0 rounded-2xl overflow-hidden bg-blue-500 w-80'>
        {/* tasks details card*/}
        {/* top section */}
        <div className='flex items-center justify-between p-5 h-15'>
          <h1 className='bg-red-700 rounded-xl h-10  text-amber-200 text-2xl pl-2 pr-2 '>{data.category}</h1>
          <h3 className='text-2xl text-amber-100 underline'>{data.date}</h3>
        </div>
          {/* task heading and description */}
          <div className='h-55 flex justify-between flex-col w-full p-3'>
            <h1 className='text-white text-2xl font-bold'>{data.title}</h1>
            <p className='mt-4 text-amber-100 font-bold '>{data.description}</p>
          <div className='rounded-2xl h-10 w-full flex items-center justify-center active:bg-green-700 cursor-pointer bg-green-300'>
            <button className='cursor-pointer text-2xl font-bold' onClick={()=>{
              alert(`${loggedinUserdata.name}Your Task is  Completed.`)
            }}>Completed</button>
          </div>
          </div>
        </div></div>
  )
}

export default Completetasks