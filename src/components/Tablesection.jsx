// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
// eslint-disable-next-line react/prop-types
const Col = ({ title, img, isLast }) => {
    return (
        <>
            <div className='flex justify-between w-[15vw] h-[7vh] hover:text-white hover:bg-blue-500'>
                <h1 className='ml-4 mt-2 text-xs'>{title}</h1>
                <img className='w-5 h-5 mr-4 mt-3 ' src="https://github.com/Aaraav/Selemenreact/assets/76102028/9fde4a89-89a9-4496-a7b0-0d26917bbd73" />
            </div>
            { !isLast && <hr className='w-[13vw] ml-[1vw] border-gray-950'/> }
        </>
    )

    
}

// eslint-disable-next-line react/prop-types
const Coll=({title,img,stylee})=>{
    return(
        <div className='flex  w-[30vw] h-[8vh] hover:text-white hover:bg-blue-500'>
                    <img className='w-5 h-5 mr-4 mt-3 ml-3 ' src="https://github.com/Aaraav/Selemenreact/assets/76102028/34441975-179c-4d9f-bf83-9f65b54e8854" />

        <h1 className='ml-0 mt-3 text-xs w-[50%]'>{title}</h1>
    </div>
    )

}

const Colll=({title})=>{
    return (
        <div className='flex justify-between w-[15vw] h-[7vh] hover:text-white hover:bg-blue-500'>
        <h1 className='ml-20 mt-2 text-xs text-center'>{title}</h1>
    </div>
    )
}



 


// eslint-disable-next-line react/prop-types
export default function Tablesection({toggleReferForm}) {

    const [isVisible, setIsVisible] = useState(false);

    const handleReferNowClick = () => {
      setIsVisible(!isVisible); 
      toggleReferForm(!isVisible); 
    };
    return (
        <div className='w-screen h-screen'>
            <h1 className='text-2xl text-center pt-10 font-semibold'>
                What Are The <span className='text-blue-600'>Referral Benefits</span>?
            </h1>
            <div className='flex'>
                <div className='w-[15vw] h-[63vh] border-2 rounded-xl ml-[10%] mt-10'>
                    <Col title="ALL PROGRAMS" />
                    <Col title="PRODUCT MANAGEMENT" />
                    <Col title="STRATEGY AND LEADERSHIP" />
                    <Col title="FINTECH" />
                    <Col title="SENIOR MANAGEMENT" />
                    <Col title="DATA SCIENCE" />
                    <Col title="DIGITAL TRANSFORMATION" />
                    <Col title="ALL PROGRAMS" />
                    <Col title="BUSINESS ANALYTICS" isLast={true} />
                </div>

                <div className='w-[30vw] h-[63vh] border-2 rounded-l-lg ml-[5%] mt-10'>
                    <div className='w-[30vw] h-[7vh] bg-blue-100 rounded-l-lg'>
                    <div className='text-xl ml-10 pt-2 text-blue-600 font-semibold '>Programs</div>
                    </div>
                    <Coll stylee='flex' title='Professional Certificate Program in Product Management' img='/src/assets/Vector.png' />
                    <Coll stylee='flex' title='PG Certificate Program in Strategic Product Management' img='/src/assets/Vector.png' />
                    <Coll stylee='flex' title='Executive Program in Data Driven Product Management' img='/src/assets/Vector.png' />
                    <Coll stylee='flex' title='Executive Program in Product Management and Digital Transformation' img='/src/assets/Vector.png' />
                    <Coll stylee='flex' title='Executive Program in Product Management' img='/src/assets/Vector.png' />
                    <Coll stylee='flex' title='Advanced Certification in Product Management' img='/src/assets/Vector.png' />
                    <Coll stylee='flex' title='Executive Program in Product Management and Project Management' img='/src/assets/Vector.png' />


                 </div>
                 <div className='w-[15vw] h-[63vh] border-2 mt-10'>
                 <div className='w-[15vw] h-[7vh] bg-blue-100'>
                    <div className='text-xl ml-10 pt-2 text-blue-600 font-semibold '>Referrer Bonus</div>
                    </div>

                    <Colll title='7000'/>
                    <Colll title='9000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>
                    <Colll title='10000'/>

                 </div>
                 <div className='w-[15vw] h-[63vh] border-2 rounded-r-lg mt-10'>
                 <div className='w-[15vw] h-[7vh] bg-blue-100'>
                    <div className='text-xl ml-10 pt-2 text-blue-600 font-semibold tex '>Referrer Bonus</div>
                    </div>

                    <Colll title='9000'/>
                    <Colll title='11000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>

                    <Colll title='10000'/>
                    <Colll title='10000'/>
                    
                 </div>
            </div>

            <button  className='border-black bg-gray-500 text-white p-1 text-lg rounded-md w-36 mt-5  ml-[79%]'>
          Show All
        </button>

            <button onClick={handleReferNowClick}  className='border-black bg-blue-500 text-white p-1 text-lg rounded-md w-36 mt-5 ml-[45%]'>
          Refer Now
        </button>

        
        


        </div>
    );
}
