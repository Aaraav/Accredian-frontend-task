// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';

// eslint-disable-next-line react/prop-types
const Circledata = ({ img, desc, ml, mr }) => {
  return (
    <div className={`${ml} ${mr}`}>
      <img className='ml-14 mb-4' src={img} alt='Circle' />
      <p className='text-center w-[200px]'>{desc}</p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export default function ReferProcess({ toggleReferForm }) {

    const [isVisible, setIsVisible] = useState(false);

  const handleReferNowClick = () => {
    setIsVisible(!isVisible); 
    toggleReferForm(!isVisible); 
  };

  return (
    <div className='w-full h-screen bg-sky-100 mt-14'>
      <h1 className='text-2xl text-center pt-10'>
        How Do I <span className='text-blue-600'>Refer</span>?
      </h1>

      <img src='https://github.com/Aaraav/Selemenreact/assets/76102028/e3f38868-96b5-4f93-bbf8-566b2cd9d52a' alt='Illustration' />
<div className='absolute top-[66vw] justify-between'>
      <div className='flex justify-between '>
        <Circledata
          ml='ml-[14vw]' 
          img='https://github.com/Aaraav/Selemenreact/assets/76102028/ea3c831c-2183-4b35-ae6e-3ed679bc0c41'
          desc='Submit referrals easily via our website’s referral section.'
        />
        <Circledata
        ml='ml-[13vw]'
          img='https://github.com/Aaraav/Selemenreact/assets/76102028/421139e8-135e-4000-8eda-6979e0bb22f0'
          desc='Earn rewards once your referral joins an Accredian program.'
        />
        <Circledata
        ml='ml-[13vw]'
        img='https://github.com/Aaraav/Selemenreact/assets/76102028/d7d1bcfb-5228-4c7e-af47-a1215d61e904'
          desc='Both parties receive a bonus 30 days after program enrollment.'
        />
      </div>
      </div>

      <button onClick={handleReferNowClick} className='border-black bg-blue-500 text-white p-1 text-lg rounded-md w-36 ml-[42vw] '>
          Refer Now
        </button>
    </div>
  );
}
