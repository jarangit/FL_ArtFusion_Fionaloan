import React from 'react'
import AccordionItem from '../accordionItem'

const accordionData = [
  {
    id:1,
    title: "Annual Percentage Rate (APR)",
    content: `Here at Fionaloan-online we offer APR rates ranging from 4.95% minimum to 35.95% maximum. The APR you may be offered depends on different factors, including your personal situation and financial standing. By completing our loan offer form you shall receive details of the APR and full terms of any loan offered to you.
    The actual interest rate you may be offered depends on several factors: your credit score, financial history, income, etc. Contact your lender for more information about the APR you may receive and the terms of your loan agreement.`
  },
  {
    id:2,
    title: "Loan Term (Repayment Period)",
    content: `table`
  },
  {
    id:3,
    title: "Representative Example of APR",
    content: `If you borrow $2,500 over a term of 1 year with an APR of 10% and a fee of 3%, you will pay $219,79 each month. The total amount payable will be $2,637, with a total interest of $137,48.`
  },
  {
    id:4,
    title: "Financial Implications (Interest & Finance Charges)",
    content: `Fionaloan-online is not a lender and we cannot predict what fees and interest rate will be applied to the loan you will be offered. It is your lender that will provide all the necessary information about the cost of the loan. It is your responsibility to peruse the loan agreement carefully and accept the offer only if you agree to all the terms. Fionaloan-online service is free of charge, and you are under no obligation to accept the terms that the lender offers you.`
  },
  {
    id:5,
    title: "Implications of Non-Payment",
    content: `When you accept the terms and conditions for a loan, you enter into a commitment to repay the amount you owe according to the specific schedule outlined in the documents. In the event of non-payment, additional charges may be applied. Late payment penalties vary by lender, and as Fionaloan-online is not involved in the lending process, we cannot supply any information on the fees you will incur if any default occurs. For more information, please contact the lender directly if you have any issues relating to your loan repayment.`
  },
  {
    id:6,
    title: "Potential Impact on Credit Score",
    content: `Fionaloan-online is not a lender and we do not check your credit standing and credit capacity. When you submit a request at our online platform, this is considered a soft inquiry and does not impact your credit score. However, some lenders may carry out a credit check to ascertain your eligibility for a loan. Most likely they will turn to any of the three major credit bureaus (Transunion, Experian, and Equifax) that is in most cases considered a hard inquiry and may affect your credit score.
    `
  },
  {
    id:7,
    title: "Collection Practices",
    content: `Fionaloan-online is not a lender. As such, we are not involved in any debt collection practices and cannot make you aware of any of them. Your lender will specify their collection practices in your loan agreement. If you have any questions regarding the issue, please, address them to your lender. For more information visit our page for Responsible Lending. fionaloan-online.com itself isn’t involved in debt collection.`
  },
  {
    id:8,
    title: "Loan Renewal Policies",
    content: "Loan renewal options are not always available. It is therefore advisable to clarify whether the option is available with your lender. Be sure to carefully peruse the renewal policy presented in the agreement before you sign the documents."
  },
]
const ARPSection = () => {
  return (
    <div className='my-28'>
      <div className='myContainer'>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-3xl font-bold text-center'>
            APR Rate Range
            and Repayment Terms
          </div>
          <div className='w-16 h-1 bg-green' />
          <div className='text-xl text-center opacity-75 max-w-[80%]'>
            All terms, fees, interest rates and other details are specified in your loan agreement. We highly recommend you read this carefully.
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-10'>
          {accordionData.map((item, key) => (
            <React.Fragment key={key}>
              <AccordionItem
                title={item.title}
                content={item.content}
                id = {item.id}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ARPSection