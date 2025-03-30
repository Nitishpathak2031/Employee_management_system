import React from 'react';

const AcceptTask = ({data}) =>{


    return (
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
             <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-3 mb-20'>
                    {data.taskDescription}</p> 
              <div className='flex justify-between mt-4'>
                <button className='bg-green-500 px-1  py-3 text-sm rounded-lg font-bold'>mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-lg font-bold'>mark as failed</button>
              </div>
      </div>
    )
}

export default AcceptTask