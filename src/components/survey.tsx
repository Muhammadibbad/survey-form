import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const colorPurp: string = "#EAE8FD";

interface Question {
  id:number;
  text: string;
  options: string[];
  followUp: [number, number] | null;
  
}




const colors={
  '#7B59FF':'#EAE8FD',
  '#EA31CC':'#FDE8F9',
  '#B54800':'#FDECE7',
  '#04AE3E':'#E6FEEE',

}
const questions: Question[] = [
  {
    // 0
    id:0,
    text: "Are you an elected official or candidate office?",
    options: ["Yes", "No"],
    followUp: [2, 1],
    
  },
  {
    // 1
    id:1,
    text: "Are you registered to vote?",
    options: ["Yes", "No"],
    followUp: [3, 4],
    
  },
  {
    // 2
    id:2,
    text: "Which party do you consider?",
    options: ["Democratic", "Republican","Libertarian","Other"],
    followUp: null,
    
  },
 
  {
    // 3
    id:3,
    text: "Do you plan on voting for 2024?",
    options: ["Yes", "No"],
    followUp: [6, 5],
    
  },
  {
    // 4
    id:4,
    text: "Do you know how to register to vote?",
    options: ["Yes", "No"],
    followUp: [7, 7],
    
  },
  {
    // 5
    id:5,
    text: "Why Not?",
    options: ["It does'nt make difference", "I'm Not Interested in Politics"],
    followUp: null, //Submit
    
  },

  {
    // 6
    id:6,
    text: "Do you consider yourself a political party?",
    options: ["Yes", "No"],
    followUp: [2,0], //no route to list
    
  },
  {
    // 7
    id:7,
    text: "Do you plan on registering to vote?",
    options: ["Yes", "No"],
    followUp: [3, 6],
    
  },
];

type DataItem = {
  question: string;
  answer: string;
};
type surveyType={
  "Are you an elected official or candidate office?":string,
  "Are you registered to vote?":string,
  "Which party do you consider?":string,
  "Do you plan on voting for 2024?":string,
  "Do you know how to register to vote?":string,
  "Do you consider yourself a political party?":string,
  "Why Not?":string,
  "Do you plan on registering to vote?":string
}
const surveyQuestion:surveyType={
  "Are you an elected official or candidate office?":"",
  "Are you registered to vote?":"",
  "Which party do you consider?":"",
  "Do you plan on voting for 2024?":"",
  "Do you know how to register to vote?":"",
  "Do you consider yourself a political party?":"",
  "Why Not?":"",
  "Do you plan on registering to vote?":""

}

const SurveyForm: React.FC = () => {


 const keysColor = Object.keys(colors);
 const valuesColor = Object.values(colors);
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [selectedValue,setSelectedValue]=useState(surveyQuestion)
  const [moveInd,setMoveInd]=useState<number>(0)
  
   const [follow,setFollow]=useState<any>([])
console.log("NExt",moveInd)
console.log(selectedValue)
console.log("thisthis",follow[-1])

 console.log("track",follow)

console.log("current",currentQuestion)

const handleClick=(ans:string,ques:string,nextInd:number)=>{
  
  setMoveInd(nextInd)
  setSelectedValue({ ...selectedValue, [ques]: ans });
}

const handleNext=()=>{
 
 
  setFollow([...follow,currentQuestion])
  setCurrentQuestion(moveInd)
}

const handlePrev=()=>{
  const newFollow = follow.slice(0, follow.length - 1);
  const lastElement = follow[follow.length - 1];
  setFollow(newFollow)
  setCurrentQuestion(lastElement)
  
}
  
  return (
    <div className="ml-[200px] mr-[200px]  flex flex-col  items-center justify-center border-t-2 border-[#EFF2F5] mt-4">

      <div className=" space-y-[50px]  w-[100%] h-[500px] mt-[40px] shadow-md shadow-[#00000014]  rounded-xl">
        
        <div className="flex flex-col text-[20px] mt-[120px] items-center justify-center  font-serif font-semibold">
          <h2> {questions[currentQuestion].text}</h2>
        </div>
        <div className="  flex flex-col items-center justify-center">
          <RadioGroup className=" space-y-4 w-[20%] h-[40px] ">
             {questions[currentQuestion].options.map((item,index)=>( 
              <RadioGroup.Option key={index} className="" value={"Sampel"}>
              <button
               onClick={()=>handleClick(item,questions[currentQuestion].text,questions[currentQuestion].followUp[index])} className={`text-[${keysColor[index]}] bg-[${valuesColor[index]}]  rounded-full  w-[100%] h-[40px] `}
              >
                {" "}
                <span className="">{item}</span>
              </button>
              
            </RadioGroup.Option>


             ))} 
            


            
          </RadioGroup>
        </div>
      </div>
      <div className="w-[100%] mt-[80px]  flex space-x-[76%]  ">
        <div onClick={handlePrev} className="w-[12%] cursor-pointer flex flex-row items-center justify-center space-x-2 border border-black bg-[#002868] rounded-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div>
            <button className={`text-white  w-[100%] h-[40px] `}>
              Previous
            </button>
          </div>
        </div>
        <div  onClick={()=>handleNext()}className="w-[12%] cursor-pointer flex flex-row items-center justify-center space-x-2 border border-black bg-[#002868] rounded-full">
          
          <div>
            <button className={`text-white  w-[100%] h-[40px] `}>Next</button>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
