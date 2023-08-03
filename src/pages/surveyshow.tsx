import SurveyForm from "@/components/survey";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addSurvey } from "@/redux/feature/surveySlice";
import Image from "next/image";

type surveyType = {
  officialCandidate: string;
  registeredVote: string;
  Party: string;
  votingPlan: string;
  registeredHow: string;
  considerParty: string;
  whyNot: string;
  registerPlan: string;
};
const surveyQuestion: surveyType = {
  officialCandidate: "",
  registeredVote: "",
  Party: "",
  votingPlan: "",
  registeredHow: "",
  considerParty: "",
  whyNot: "",
  registerPlan: "",
};
const Surveyshow = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(addSurvey(surveyQuestion));
  };

  return (
    <div>
      <div className=" ">
        {/* Header */}
        <div className="flex space-x-[65%]  mt-[80px] xl:ml-[100px] lg:ml-[80px] md:ml-[80px] sm:ml-[80px] ssm:ml-[80px] ssm:mr-[100px]  mr-[200px]   flex-row  justify-center ">
          <div>
            <h2 className="xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[18px] ssm:text-[16px] font-semibold font-mono">
              Fill For a Better Match
            </h2>
          </div>
          <div>
            <Link href={"/"}>
              {" "}
              <button
                onClick={handleClick}
                className="text-blue-800 font-semibold"
              >
                CANCEL
              </button>
            </Link>
          </div>
        </div>

        {/* Survey Form */}
        <div className="relative  ">
         <div> <SurveyForm /></div>
          
          <div className="absolute bottom-0 right-0 " style={{zIndex: -100}}> <Image className="lg:h-[500px] lg:w-[500px] sm:h-[300px] sm:w-[300px]" src="/Group (1).png" alt="No Image" width={500} height={500} ></Image></div>
        </div>
        
       
        
        <div className="w-full h-[40px]  bg-blue-700 flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-white">
              Already have an account?{" "}
              <span className="font-semibold">Login</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveyshow;
