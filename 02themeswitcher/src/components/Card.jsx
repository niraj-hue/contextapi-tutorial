import React from 'react'

function Card() {
  return (
    <div className='max-w-fit mx-auto fixed inset-x-0 p-10 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-red-400'>
        <div className=' rounded-xl'>
            <img 
                className='w-100 bg-cover overflow-hidden rounded-xl dark:border-2 border-white'
                src="https://leadschool.in/wp-content/uploads/2022/04/shutterstock_1777292972.jpg" 
                alt="img-sample" 
            />
        </div>
    </div>
  )
}

export default Card