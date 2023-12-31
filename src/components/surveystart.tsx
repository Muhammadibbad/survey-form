import React from 'react'
import Image from 'next/image'
import CoverImg from "../../public/pexels-mat-brown-899330 1.png"
import GotoSurvey from "../../public/Group 1.png"
import Link from 'next/link'


const Surveystart = () => {
  return (
    
    
     <div className=' xl:w-[100%] ssm:w-[70%] sm:w-[70%] md:w-[80%] lg:w-[80%]   backdrop-blur-2xl   bg-opacity-10 bg-white rounded-3xl flex flex-col items-center justify-center  h-auto'> 
           <div className= ' w-[90%] space-y-4  flex flex-col items-center justify-center mt-10 mb-10'>
          <div className=' '><Image src={GotoSurvey} alt='Logo is Missing'></Image></div>
          <div className='text-[25px] text-white '><h2>Take the Survey</h2></div>
          <div className='text-[15px] text-white  text-center'>Take our quick survey and we'll show you the candidates that share your priorities</div> 
          <div className='w-[90%] flex flex-col items-center justify-center  h-[60px]'><Link className=' text-[13px] flex flex-col items-center  bg-[#002868] text-white justify-center  h-[60px] w-[100%] rounded-full' href={"/surveyshow"}><button>I'm Voter</button></Link></div>
          <div className='w-[90%] flex flex-col items-center justify-center  h-[60px]'><Link className='border border-white text-[13px] flex flex-col items-center   text-white justify-center  h-[60px] w-[100%] rounded-full' href={"/surveyshow"}><button>I'm Candidate</button></Link></div>
            
          </div>
           </div>
        

    
  )
}

export default Surveystart