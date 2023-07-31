import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import CoverImg from "../../public/pexels-mat-brown-899330 1.png"
import GotoSurvey from "../../public/Group 1.png"
import Surveystart from './surveystart'
import Surveysubmit from './surveysubmit'
import Surveyconsider from './surveyConsider'
const Surveyhome = () => {

  const [progress,setprogress]=useState(1)
  //  make
  return (
    <div className='flex flex-col justify-center  items-center'  >
        <div className="w-[100%]">
      <div className="h-screen  ">
        <Image src={CoverImg} alt="Cover Image" layout="fill"  />
      </div>
    </div>
           
        {progress===0 ?  <Surveystart/> : progress===1? <Surveysubmit/>:<Surveyconsider/>}
       
        
        
        
        </div>
  )
}

export default Surveyhome