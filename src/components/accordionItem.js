import React, { useState, useEffect } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const AccordionItem = ({ title, content, id }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (id <= 3) {
      setShow(true)
    }
  }, [id])

  return (
    <div className='bg-gray px-6 rounded-md py-2'>
      <div className='flex justify-between  py-2 cursor-pointer'
        onClick={() => setShow(!show)}
      >
        <div className='font-bold text-black'>
          {title}
        </div>
        <div className=' flex justify-center items-center transition-all'>
          {show ? (
            <AiOutlineMinus size={20} />
          ) : (
            <AiOutlinePlus size={20} />
          )}
        </div>
      </div>
      <div className={`overflow-hidden transition-all text-sm duration-300 ${show ? "max-h-[500px] pb-3" : "max-h-0"}`}>
        {content === "table" ? (
          <table className="table-auto w-[400px] text-center border-border border">
            <thead>
              <tr>
                <th className='border border-border' >Minimum</th>
                <th className='border border-border' >Maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-border'>65 days</td>
                <td className='border border-border'>84 months</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className='text-lg'>
            {content}
          </div>
        )}
      </div>
    </div>
  )
}

export default AccordionItem