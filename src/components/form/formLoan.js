import React from 'react'
// import { ArrowRightIcon } from '../icons'
import { MdKeyboardArrowDown } from 'react-icons/md'
const LoanForm = ({ onChangeDataForm, goToPosts, dataForm }) => {
  const styled = {
    label: `
     font-bold text-gray-dark absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2
    `,
    input: `
     rounded-lg p-4 pb-3 pt-3 bg-gray w-full text-xl  bg-gray-50  appearance-none text-gray-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:invisible focus:placeholder:visible focus:pt-6 transition-all
     outline-none
    `
  }

  const optionAmount = [
    {
      value: "300",
      text: "$200 - $500",
    },
    {
      value: "600",
      text: "$500 - $1,000",
    },
    {
      value: "1000",
      text: "$1,100 - $2,500",
    },
    {
      value: "2500",
      text: "$2,500 - $5,000",
    },
  ]
  return (
    <div className='bg-white rounded-lg p-4 w-full relative my_font_DMSANS text-gray-dark'>

      <div className='absolute h-[50px] z-10 flex justify-center items-center px-6 -top-4 -right-4  bg-[#f86e53] rounded-full font-bold text-lg '>
        <div className='relative'>
          Start Here
          <div class="w-6  overflow-hidden inline-block absolute left-[-43px] top-[-7px]">
            {/* <div class=" h-12  bg-[#3ad9ff] -rotate-43 transform origin-top-right"></div> */}
            <div class="header__pointer_form"></div>
          </div>
        </div>
      </div>
      <form onChange={onChangeDataForm}>
        <div className='flex flex-col gap-3'>
          <div className="relative h-[60px]">
            <input type="text" id="email" name="email" value={dataForm.email} className={`${styled.input}`} placeholder="Enter Your Email" />
            <label for="email" name="email" value={dataForm.email} className={styled.label}>Your Email Address</label>
          </div>
          <div className='relative'>
            <span className='text-sm absolute top-2 left-4 font-bold z-10 text-gray-dark'>Loan Amount</span>
            <span className='absolute right-2 z-10 top-5'>
              <MdKeyboardArrowDown
                size={20}
              />
            </span>
            <select name="amount" id="_amount" className='p-4 relative pt-6 pb-2 bg-gray rounded-lg flex flex-col w-full focus:outline-none text-gray-dark'>
              {optionAmount.map((item, key) => (
                <React.Fragment key={key}>
                  <option value={item.value} className = "!text-sm">
                    {item.text}
                  </option>
                </React.Fragment>
              ))}
            </select>
          </div>
          <div className="relative h-[60px]">
            <input type="password" id="ssn" name="ssn" maxLength={4} value={dataForm.ssn} className={`${styled.input}`} placeholder="***" />
            <label for="ssn" name="ssn" value={dataForm.ssn} className={styled.label}>Last 4 digits of SSN</label>
          </div>
          <button onClick={goToPosts} className="w-full h-[60px] my_bg_yellow rounded-md text-black font-bold drop-shadow-md transition-all hover:bg-[#ffee89]" >
            <div className='flex gap-3 justify-center items-center opacity-70'>
              <div className=''>
                Get Started
              </div>
              <div>
                {/* <ArrowRightIcon
                  color={"#000112d6"}
                  w={20}
                /> */}
              </div>
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoanForm