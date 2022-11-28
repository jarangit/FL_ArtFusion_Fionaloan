import React from 'react'
import ClockIcon from '../icons/clockIcon'
import LikeIcon from '../icons/likeIcon'
import UserIcon from '../icons/userIcon'

const mockData = [
  {
    title: `Secure`,
    content: <UserIcon color={'#f8e662'} w={80} />,
    icon: `We do our best to keep your information absolutely safe and secure. Our service uses the latest technology and data security procedures to make sure that your personal information is protected.`,
  },
  {
    title: `Affordable`,
    content: <LikeIcon color={'#f8e662'} w={80} />,
    icon: `We don’t focus solely on your credit score. We focus on helping you and providing you with loan offers! So don’t let your credit determine your future and stop you from submitting a request with us!`,
  },
  {
    title: `Affordable`,
    content: <ClockIcon color={'#f8e662'} w={80} />,
    icon: `The online form usually takes less than 10 minutes to complete. So before you even finish your cup of tea, you’ll already have your request submitted`,
  },
]
const Advantages = () => {
  return (
    <div className='my_bg_green text-white'>
      <div className='myContainer'>
        <div className='py-28'>
          <div className='text-center flex flex-col gap-6'>
            <div className='text-4xl font-bold my_font_custom'>Advantages</div>
            <div className='w-16 h-1 bg-yellow text-center mx-auto' />
            <div className='text-xl opacity-75'>Just fill out our smart request form, get connected with a lender and enjoy your extra cash!</div>
          </div>

          <div className='grid grid-cols-3 gap-4 mt-10 items-center'>
            {mockData.map((item, key) => (
              <div className='flex justify-center items-center flex-col gap-6 bg-[#30ba7b] rounded-lg p-10 h-full col-span-3 lg:col-span-1' key = {key}>
                <div>{item.content}</div>
                <div className='text-2xl'>{item.title}</div>
                <div className='opacity-70 text-lg text-center'>{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages