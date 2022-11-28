import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
const WeSection = () => {
  return (
    <div className='my_bg_yellow'>
      <div className='myContainer'>
        <div className='grid grid-cols-4 py-28 gap-10'>
          <div className=' col-span-4 lg:col-span-3 text-xl opacity-75'>We don’t wait for action, we create action. Time is priceless, and we do our best to provide you with fast and sustainable connection with the most respected lenders in the industry.</div>
          <div className='text-center  col-span-4 lg:col-span-1 lg:text-right'>
            <button className='px-10 rounded-xl my_bg_black h-[68px] text-white w-[260px] font-bold flex items-center gap-4 justify-center'>
              <div>
                Get Started
              </div>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeSection