// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Question() {
  return (
    <div className='w-screen h-[100vh]'>
<h1 className='text-2xl text-center pt-10 font-semibold'>
                Frequently Asked <span className='text-blue-600'>Questions</span>
            </h1>

<div className='flex'>
            <div className='flex flex-col ml-[16%]'>

            <button  className='border-2 border-gray-700 text-gray-400 p-3 text-[13px] rounded-md w-36 mt-20  ml-[16%] hover:shadow-lg hover:shadow-black hover:text-blue-500 hover:border-0'>
                Eligibility
        </button>
        <button  className='border-2 border-gray-700 text-gray-400 p-3 text-[13px] rounded-md w-36 mt-5 ml-[16%]   hover:shadow-lg hover:shadow-black hover:text-blue-500 hover:border-0'>
        How to use?        </button>

        <button  className='border-2 border-gray-700 text-gray-400 p-3 text-[13px] rounded-md w-36 mt-5  ml-[16%] hover:shadow-lg hover:shadow-black hover:text-blue-500 hover:border-0'>
        Terms & Conditions        </button>


            </div>

            <div className='ml-[10%] mt-44'>
             <p className='text-blue-500 text-sm font-semibold'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</p>

             <p className='text-[13px] mt-5 w-[70%]'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
             suitable for individuals from any field of work.</p>

             <p className='text-[13px] font-bold mt-5'>What is the minimum system configuration required?</p>

            </div>

            </div>

            <div className='w-[70%] ml-[15vw] h-[25%] bg-blue-500 mt-12 flex justify-evenly align-middle'>
                <img className='bg-white w-16 h-16 mt-10' src='https://github.com/Aaraav/Selemenreact/assets/76102028/b7644e5c-ada6-49dc-b679-506cdc5bfcdb'/>
                <h1 className='mt-10 font-semibold text-xl text-white'>Want to delve deeper into the program? <br/><span className='text-lg font-normal'>Share your details to receive expert insights from our program team!</span></h1>
                <button className='border-black bg-white text-blue-500 w-[200px] h-[40px]  p-1 text-lg rounded-md w-36 mt-10'>
          Get In Touch
        </button>
            </div>


    </div>
  )
}
