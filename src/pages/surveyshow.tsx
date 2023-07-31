import SurveyForm from "@/components/survey";

import React from 'react'

const Surveyshow = () => {
  return (
    <div>
      <div className="h-auto border border-black">
        {/* Header */}
      <div className="flex space-x-[74%]  mt-[80px] ml-[200px] mr-[200px]  flex-row  justify-center " >
   <div >
    <h2 className="text-[20px] font-mono">Fill For a Better Match</h2>
   </div>
   <div>
    <button className="text-blue-800 font-semibold">CANCEL</button>
   </div>
        </div>

        {/* Survey Form */}
        <div className=" mb-[3%]"> 
            <SurveyForm/>
        </div>
        <div className="w-full h-[40px] bg-blue-700 flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-white">Already have an account? <span className="font-semibold">Login</span></h2>
          </div>
        </div>
      </div>
        
       
       
        
    </div>
  )
}

export default Surveyshow