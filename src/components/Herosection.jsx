// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Herosection({ toggleReferForm }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleReferNowClick = () => {
    setIsVisible(!isVisible); // Toggle visibility state
    toggleReferForm(!isVisible); // Pass the current visibility state to parent
  };

  return (
    <>
      <ul className='flex align-middle justify-center bg-sky-100 text-xl w-[40vw] h-[40px] ml-[27vw] rounded-2xl relative text-c'>
        <li className='mr-10 ml-5 p-1'>Refer</li>
        <li className='mr-10 p-1'>Benefits</li>
        <li className='mr-10 p-1'>FAQs</li>
        <li className='mr-10 p-1'>Support</li>
      </ul>

      <div className='w-[80vw] bg-sky-100 h-[75vh] mt-10 ml-[10vw] rounded-xl shadow-2xl '>
        <div className='flex'>
          
          <img src='https://github.com/Aaraav/Selemenreact/assets/76102028/2a7b4302-c281-48e2-9203-9059974639e5' className='w-[30%] h-min ml-[10%] mt-24'/>
          <img src='https://github.com/Aaraav/Selemenreact/assets/76102028/121f7e93-05a1-4a2e-b654-1d586dcb05ba' className='w-[50%] ml-[5%] h-[10%]'/>

      </div>

         <button onClick={handleReferNowClick} className='border-black bg-blue-500 text-white p-1 text-lg rounded-md w-36 absolute top-[90vh] left-[20%]'>
          Refer Now
          </button>

      </div>
    </>
  );
}
