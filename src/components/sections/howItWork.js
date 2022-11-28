import React from 'react'
import UserIcon from '../icons/userIcon'
import LikeIcon from '../icons/likeIcon'
import ClockIcon from '../icons/clockIcon'

const mockData = [
  {
    title: `Submit A Request`,
    img: <UserIcon color={'#48d78c'} w={80} />,
    content: `All paperwork is gone! The whole process is completely online. Just fill in a few details about yourself and hit “Get Started”!`
  },
  {
    title: `Check The Offers`,
    img: <LikeIcon color={'#48d78c'} w={80} />,
    content: `If the offer suits your needs and desires, and you agree with all the terms — simply e-sign the deal and get ready to enjoy the money!`
  },
  {
    title: `Receive Your Money`,
    img: <ClockIcon color={'#48d78c'} w={80} />,
    content: `Once you submit your request, get your offer, and e-sign it, you’ll be able to get the funds to your bank account in no time!`
  },
]
const HowItWork = () => {
  return (
    <div className='myContainer'>
      <div className='py-28'>
        <div className='grid grid-cols-3 gap-20'>
          <div className=' col-span-3 lg:col-span-2 flex flex-col gap-16 order-2 lg:order-1'>
            {mockData.map((item, key) => (
              <div className='flex gap-10 items-center text-gray-dark'>
                <div>{item.img}</div>
                <div>
                  <div className='text-2xl font-semibold'>{item.title}</div>
                  <div className='mt-3'>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
          <div className=' col-span-3 lg:col-span-1 lg:order-2 order-1'>
            <div className='relative'>
              <div className='text-4xl font-bold my_font_custom text-black'>How It Works</div>
              <div className='w-20 h-1 bg-green absolute -bottom-5 opacity-75' />
            </div>
            <div className='mt-10'>
              The process is super fast and simple. It takes minutes to see results and enjoy your extra cash
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWork