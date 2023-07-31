import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const colorPurp: string = "#EAE8FD";

interface Question {
  id: number;
  text: string;
  options: string[];
  followUp: number[];
}

const colors = {
  "#7B59FF": "#EAE8FD",
  "#EA31CC": "#FDE8F9",
  "#B54800": "#FDECE7",
  "#04AE3E": "#E6FEEE",
};
const questions: Question[] = [
  {
    // 0
    id: 0,
    text: "Are you an elected official or candidate office?",
    options: ["Yes", "No"],
    followUp: [2, 1],
  },
  {
    // 1
    id: 1,
    text: "Are you registered to vote?",
    options: ["Yes", "No"],
    followUp: [3, 4],
  },
  {
    // 2
    id: 2,
    text: "Which party do you consider?",
    options: ["Democratic", "Republican", "Libertarian", "Other"],
    followUp: [8, 8, 8, 8],
  },

  {
    // 3
    id: 3,
    text: "Do you plan on voting for 2024?",
    options: ["Yes", "No"],
    followUp: [6, 5],
  },
  {
    // 4
    id: 4,
    text: "Do you know how to register to vote?",
    options: ["Yes", "No"],
    followUp: [7, 7],
  },
  {
    // 5
    id: 5,
    text: "Why Not?",
    options: [
      "It does'nt make difference",
      "I'm Not Interested in Politics",
      "I usually don't see candidate I like",
      "I don't have time",
    ],
    followUp: [8, 8], //Submit
  },

  {
    // 6
    id: 6,
    text: "Do you consider yourself to be a part in a political party?",
    options: ["Yes", "No"],
    followUp: [2, 8], //no route to list
  },
  {
    // 7
    id: 7,
    text: "Do you plan on registering to vote?",
    options: ["Yes", "No"],
    followUp: [3, 6],
  },
  {
    // 8
    id: 8,
    text: "Click on the issues you find most important, if you don't find the one you're thinking of, feel free to add it at the bottom",
    options: ["Affordable Housing", "Minimum Wage","Abortion",'Income Inequality','Law Enforcement','Religious Liberty','Immigration','Climate Change','Healthcare','Civil Rights and Liberties','Criminal Justice Reform','Crime','Education','Gay Rights',
  'Gun Control','Jobs and the Economy','Medicare','National Security and Foreign Policy','Social Security','Taxes and government spending',
  'The Budget Deficit','Inflation','Wealth Concentration','Taxes','Refugees','Racism','Sexism','Antisemitism','Living conditions','Prisoners Rights',
   'Human Rights','Homelessness','Food Security','Disability Rights','Cost of College and University','Others'],
    followUp: [0, 0],
  },
];

type DataItem = {
  question: string;
  answer: string;
};
type surveyType = {
  "Are you an elected official or candidate office?": string;
  "Are you registered to vote?": string;
  "Which party do you consider?": string;
  "Do you plan on voting for 2024?": string;
  "Do you know how to register to vote?": string;
  "Do you consider yourself a political party?": string;
  "Why Not?": string;
  "Do you plan on registering to vote?": string;
};
const surveyQuestion: surveyType = {
  "Are you an elected official or candidate office?": "",
  "Are you registered to vote?": "",
  "Which party do you consider?": "",
  "Do you plan on voting for 2024?": "",
  "Do you know how to register to vote?": "",
  "Do you consider yourself a political party?": "",
  "Why Not?": "",
  "Do you plan on registering to vote?": "",
};
interface State {
  hidesk: string[];
}
const SurveyForm: React.FC = () => {
  const keysColor = Object.keys(colors);
  const valuesColor = Object.values(colors);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState(surveyQuestion);
  const [moveInd, setMoveInd] = useState<number>(0);
  const [state, setState] = useState<State>({
    hidesk: [], // Initialize the array to store the selected options
  });

  const [follow, setFollow] = useState<any>([]);
  console.log("NExt", moveInd);
  console.log(selectedValue);
   console.log("thisthis", state);

  console.log("track", follow);

  console.log("current", currentQuestion);

  const handleClick = (ans: string, ques: string, nextInd: number) => {
    setMoveInd(nextInd);
    setSelectedValue({ ...selectedValue, [ques]: ans });
  };

  const handleNext = () => {
    setFollow([...follow, currentQuestion]);
    setCurrentQuestion(moveInd);
  };

  const handlePrev = () => {
    const newFollow = follow.slice(0, follow.length - 1);
    const lastElement = follow[follow.length - 1];
    setFollow(newFollow);
    setCurrentQuestion(lastElement);
  };


  const handleCheckBox=(item:string)=>{
  // Check if the option is already selected
  const index = state.hidesk.indexOf(item);

  if (index === -1) {
    // Option is not selected, add it to the array
    setState((prevState) => ({ ...prevState, hidesk: [...prevState.hidesk, item] }));
  } else {
    // Option is already selected, remove it from the array
    const updatedHidesk = [...state.hidesk];
    updatedHidesk.splice(index, 1);
    setState((prevState) => ({ ...prevState, hidesk: updatedHidesk }));
  }
 
  }

  return (
    <div className="ml-[200px] mr-[200px] h-auto flex flex-col  items-center justify-center border-t-2 border-[#EFF2F5] mt-4">
      <div className=" space-y-[50px]  w-[100%] h-auto mt-[40px] shadow-md shadow-[#00000014]  rounded-xl">
        {currentQuestion === 8 ? (
          <div className=" ml-[9%]  mr-[9%] flex flex-col text-[20px]  items-center justify-center  font-serif font-semibold">
            <h2> {questions[currentQuestion].text}</h2>
          </div>
        ) : (
          <div className=" ml-[5%]  mr-[5%] flex flex-col text-[20px] mt-[120px] items-center justify-center  font-serif font-semibold">
            <h2> {questions[currentQuestion].text}</h2>
          </div>
        )}

        <div className="  flex  flex-col items-center justify-center  ">
          
          <RadioGroup className="flex  flex-col items-center justify-center mt-[20px] mb-[20%]  h-auto  w-[90%]  ">
            {questions[currentQuestion].options.length === 2 && (
              <div className="flex flex-col items-center justify-center w-[90%] space-y-4 space-x-2">
                {questions[currentQuestion].options.map((item, index) => (
                  <RadioGroup.Option
                    key={index}
                    className=" w-[30%]"
                    value={"Sampel"}
                  >
                    <button
                      onClick={() =>
                        handleClick(
                          item,
                          questions[currentQuestion].text,
                          questions[currentQuestion].followUp[index]
                        )
                      }
                      
                      className={`${
                        index === 0
                          ? "text-[#7B59FF] bg-[#EAE8FD]"
                          : "text-[#EA31CC] bg-[#FDE8F9]"
                      } rounded-full  w-[100%] h-[40px] `}
                    >
                      {" "}
                      <span className="">{item}</span>
                    </button>
                  </RadioGroup.Option>
                ))}
              </div>
            )}

            {questions[currentQuestion].options.length === 4 && (
              <div className="grid grid-cols-2 gap-4  w-[50%] mt-[10px]">
                {questions[currentQuestion].options.map((item, index) => (
                  <RadioGroup.Option
                    key={index}
                    className=" w-[100%]"
                    value={"Sampel"}
                  >
                    <button
                      onClick={() =>
                        handleClick(
                          item,
                          questions[currentQuestion].text,
                          questions[currentQuestion].followUp[index]
                        )
                      }
                     
                      className={`${
                        index === 0
                          ? "text-[#7B59FF] bg-[#EAE8FD]"
                          : index === 1
                          ? "text-[#EA31CC] bg-[#FDE8F9]"
                          : index === 2
                          ? "text-[#B54800] bg-[#FDECE7]"
                          : "text-[#04AE3E] bg-[#E6FEEE]"
                      } rounded-full  w-[100%] h-[40px] `}
                    >
                      {" "}
                      <span className="">{item}</span>
                    </button>
                  </RadioGroup.Option>
                ))}
              </div>
            )}
            {questions[currentQuestion].options.length > 4 && (
              <div className="grid grid-cols-3 gap-8   w-[80%] h-[920px] mt-[10px] ">
                {questions[currentQuestion].options.map((item, index) => (
                  <RadioGroup.Option
                    key={index}
                    className=" text-[12px] bg-[#EEEEEE]   rounded-3xl flex flex-row space-x-3 w-[100%]"
                    value={"Sampel"}
                  >
                    <input type="checkbox" onClick={()=>handleCheckBox(item)} className="bg-blue-500 border border-black ml-[5%]  "  /> 

                    <button
                      
                      
                      className=''  
                    >
                      {" "}
                      <span className="">{item}</span>
                    </button>
                  </RadioGroup.Option>
                ))}
              </div>
            )}
          </RadioGroup>
        </div>

      </div>
      <div className="w-[100%] mt-[80px]  flex space-x-[76%]  ">
        <div
          onClick={handlePrev}
          className="w-[12%] cursor-pointer flex flex-row items-center justify-center space-x-2 border border-black bg-[#002868] rounded-full"
        >
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
        <div
          onClick={() => handleNext()}
          className="w-[12%] cursor-pointer flex flex-row items-center justify-center space-x-2 border border-black bg-[#002868] rounded-full"
        >
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
