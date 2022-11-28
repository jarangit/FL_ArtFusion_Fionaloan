import React, { useState } from 'react'
import LoanForm from '../form/formLoan'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    amount: "",
    ssn: ""
  })
  const navigate = useNavigate();
  const goToPosts = () => {
    navigate({
      pathname: '/form',
      search: `apply?manual=1&=&requested_amount=${dataForm.amount}&email=${dataForm.email}&last4ssn=${dataForm.ssn}`,
    });
    window.location.reload();
  }
  const onChangeDataForm = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
    console.log(dataForm)
  }
  return (
    <div className='my_bg_banner h-[610px] relative overflow-hidden'>
      {/* image banner */}
      <div className=' absolute right-24 -top-20 hidden lg:block'>
        <img src="/img/banner.png" alt="" width={550} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 myContainer items-center !my-auto h-full'>
        <div className='flex flex-col gap-10'>
          <div className='flex gap-3 items-center'>
            <div>
              <img src="/img/logo.svg" alt="" />
            </div>
            <div className='text-3xl text-gray-dark my_font_DMSANS'>fionaloan-online</div>
          </div>

          <h1 className='text-3xl text-center lg:text-left lg:text-6xl font-bold'>
            Get Your Personal Loan Up To $5000
          </h1>
        </div>
        <div>
          <LoanForm
            onChangeDataForm={onChangeDataForm}
            goToPosts={goToPosts}
            dataForm={dataForm}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner