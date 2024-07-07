// eslint-disable-next-line no-unused-vars
import React from 'react'

const Col = ({ title, img }) => {
    return (
        <>
            <div className='flex justify-between w-[20vw] h-[7vh] hover:text-white hover:bg-blue-500'>
                <h1 className='ml-4 mt-2 text-xs'>{title}</h1>
                <img className='w-5 h-5 mr-4 mt-3 ' src="https://github.com/Aaraav/Selemenreact/assets/76102028/8ba27caa-e685-4261-9bb6-93df4c6463c8" />
            </div>
        </>
    )

    
}

export default function Footer() {
  return (
    <div className='w-[100vw] h-[90vh] bg-gray-700'>

        <div className='flex justify-between'>
            <div>
                 <h1 className='text-2xl text-white ml-[200px] mt-7'>accredian</h1>
                <p className='text-[12px] text-white ml-48'>Credentials that matter</p>
            </div>
        <div>

            <button className='border-black bg-blue-500 text-white p-1 text-sm rounded-md w-50 mt-7 mr-[200px]'>

          Schedule 1-on-1 Call Now
             </button>


              <p className='text-[12px] text-white mr-10'>Speak with Our Learning Advisors</p>
         </div>
    </div>


        <hr className=' border-gray-100 w-[80vw] ml-[10vw] mt-3'/>
        
<div className='flex justify-between'>
        <div className='w-[15vw] h-[63vh] ml-[10%] mt-10 text-white font-bold'>
                    <Col title="ALL PROGRAMS" />
                    <Col title="PRODUCT MANAGEMENT" />
                    <Col title="STRATEGY AND LEADERSHIP" />
                    <Col title="FINTECH" />
                    <Col title="SENIOR MANAGEMENT" />
                    <Col title="DATA SCIENCE" />
                    <Col title="DIGITAL TRANSFORMATION" />
                    <Col title="ALL PROGRAMS" />
                    <Col title="BUSINESS ANALYTICS"/>
        </div>

        <div className='text-sm text-white mt-10 '>
                    <h1>Contact Us</h1>
                    <p>Email us (For Data Science Queries): admissions@accredian.com</p>
                    <p>Email us (For Product Management Queries):pm@accredian.com</p>
                    <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
                    <p>Product Management Admission Helpline:+91 9625811095</p>
                    <p>Enrolled Student Helpline: +91 7969322507</p>
                    <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                    Haryana 122015</p>
                    <p>Why Accredian</p>
                    <p>Follow Us</p>


        </div>
        <div>
                    <ul className='text-white mr-[10vw] mt-10'>
                        <li>Accredian</li>
                        <li>About</li>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Admission Policy</li>
                        <li>Referral Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Master FAQs</li>
                    </ul>
        </div>

        </div>

        <h1 className='text-white text-center'>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</h1>
    </div>
  )
}
