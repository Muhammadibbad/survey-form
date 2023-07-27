import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import CoverImg from "../../public/pexels-mat-brown-899330 1.png"
import GotoSurvey from "../../public/Group 1.png"

const Surveyhome = () => {
  //  make
  return (
    <div className='flex flex-col justify-center  items-center'  >
        <div className="w-[100%]">
      <div className="h-screen  ">
        <Image src={CoverImg} alt="Cover Image" layout="fill"  />
      </div>
    </div>
           <div className='absolute xl:w-[40%] ssm:w-[70%] sm:w-[70%] md:w-[70%] lg:w-[60%]  backdrop-blur-2xl   bg-opacity-10 bg-white rounded-3xl flex flex-col items-center justify-center  h-[60%]'> 
           <div className= ' w-[90%] space-y-4  flex flex-col items-center justify-center'>
          <div className=' '><Image src={GotoSurvey} alt='Logo is Missing'></Image></div>
          <div className='text-[25px] text-white '><h2>Take the Survey</h2></div>
          <div className='text-[15px] text-white  text-center'>Take our quick survey and we'll show you the candidates that share your priorities</div> 
          <div className='w-[90%] flex flex-col items-center justify-center  h-[60px]'><Link className=' text-[13px] flex flex-col items-center  bg-[#002868] text-white justify-center  h-[60px] w-[100%] rounded-full' href={"/surveyshow"}><button>I'm Voter</button></Link></div>
          <div className='w-[90%] flex flex-col items-center justify-center  h-[60px]'><Link className='border border-white text-[13px] flex flex-col items-center   text-white justify-center  h-[60px] w-[100%] rounded-full' href={"/surveyshow"}><button>I'm Candidate</button></Link></div>
         
          </div>
           </div>
        
        
        
        
        
        </div>
  )
}

export default Surveyhome