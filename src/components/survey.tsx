import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addSurvey, addSelectedItem } from "@/redux/feature/surveySlice";
import { useRouter } from "next/router";
import sideImg from "../../public/Group (1).png";

interface Question {
  id: number;
  text: string;
  key: string;
  options: string[];
  followUp: number[];
}

const questions: Question[] = [
  {
    // 0
    id: 0,
    key: "officialCandidate",
    text: "Are you an elected official or candidate office?",
    options: ["Yes", "No"],
    followUp: [2, 1],
  },
  {
    // 1
    id: 1,
    key: "registeredVote",
    text: "Are you registered to vote?",
    options: ["Yes", "No"],
    followUp: [3, 4],
  },
  {
    // 2
    id: 2,
    key: "Party",
    text: "Which party do you consider?",
    options: ["Democratic", "Republican", "Libertarian", "Other"],
    followUp: [8, 8, 8, 8],
  },

  {
    // 3
    id: 3,
    key: "votingPlan",
    text: "Do you plan on voting in the upcoming 2024 presidential election?",
    options: ["Yes", "No"],
    followUp: [6, 5],
  },
  {
    // 4
    id: 4,
    key: "registeredHow",
    text: "Do you know how to register to vote?",
    options: ["Yes", "No"],
    followUp: [7, 7],
  },
  {
    // 5
    id: 5,
    key: "whyNot",
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
    key: "considerParty",
    text: "Do you consider yourself to be a part in a political party?",
    options: ["Yes", "No"],
    followUp: [2, 8], //no route to list
  },
  {
    // 7
    id: 7,
    key: "registerPlan",
    text: "Do you plan on registering to vote?",
    options: ["Yes", "No"],
    followUp: [3, 6],
  },
  {
    // 8
    id: 8,
    key: "issues",
    text: "Click on the issues you find most important, if you don't find the one you're thinking of, feel free to add it at the bottom",
    options: [
      "Affordable Housing",
      "Minimum Wage",
      "Abortion",
      "Income Inequality",
      "Law Enforcement",
      "Religious Liberty",
      "Immigration",
      "Climate Change",
      "Healthcare",
      "Civil Rights and Liberties",
      "Criminal Justice Reform",
      "Crime",
      "Education",
      "Gay Rights",
      "Gun Control",
      "Jobs and the Economy",
      "Medicare",
      "National Security and Foreign Policy",
      "Social Security",
      "Taxes and government spending",
      "The Budget Deficit",
      "Inflation",
      "Wealth Concentration",
      "Taxes",
      "Refugees",
      "Racism",
      "Sexism",
      "Antisemitism",
      "Living conditions",
      "Prisoners Rights",
      "Human Rights",
      "Homelessness",
      "Food Security",
      "Disability Rights",
      "Cost of College and University",
      "Others",
    ],
    followUp: [9, 9],
  },
];

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
interface State {
  multiple: string[];
}
const SurveyForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const SurveyData = useSelector((state: any) => state.user);
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedValue, setSelectedValue] =
    useState<surveyType>(surveyQuestion);
  const [moveInd, setMoveInd] = useState<number>(0);
  const [focused, setFocused] = useState<number | null>(null);
  const [follow, setFollow] = useState<any>([]);
  const [notSelect, setNotSelect] = useState<boolean>(false);
  const [listbox, setListBox] = useState<any>([]);
   const [firstSign, setFirstSign]=useState(false)
  console.log("This", SurveyData);
  console.log("selected", selectedValue);
  console.log("track", follow);
  console.log(listbox);

  const handleClick = (
    ans: string,
    ques: string,
    nextInd: number,
    index: number
  ) => {
    setNotSelect(false);
    setMoveInd(nextInd);
    setSelectedValue({ ...selectedValue, [ques]: ans });
    if (index === 0) {
      setFocused(index);
    } else if (index === 1) {
      setFocused(index);
    } else if (index === 2) {
      setFocused(index);
    } else {
      setFocused(index);
    }
  };

  const handleNext = () => {
    const checkEmp = questions[currentQuestion].key;
    setFocused(null);
    if (currentQuestion < 8) {
      if (selectedValue[checkEmp as keyof surveyType] !== "") {
        setFollow([...follow, currentQuestion]);
        setCurrentQuestion(moveInd);
        console.log("Next page");
      } else {
        setNotSelect(true);
      }
    } else {
      const combineObj = { ...selectedValue };
      console.log("data", combineObj);
      dispatch(addSurvey(combineObj));
      console.log("Submit");
      router.push("/");
    }
  };

  const handlePrev = () => {
    
    if (follow.length !== 0) {
      const newFollow = follow.slice(0, follow.length - 1);
      const lastElement = follow[follow.length - 1];
      setFollow(newFollow);
      setCurrentQuestion(lastElement);
      const val = questions[lastElement].key;
      setSelectedValue({ ...selectedValue, [val]: "" });
    } else {
      setFirstSign(true)
      setTimeout(() => setFirstSign(false), 2000)
     
    }
  };

const makeCheck=(item:any)=>{
  setListBox((prevSelectedOptions:any) => {
    if (prevSelectedOptions.includes(item)) {
      return prevSelectedOptions.filter((option:any) => item !== option);
    } else {
      return [...prevSelectedOptions, item];
    }
  });
}



  const handleCheckBox = (item: any, index: number) => {
    
    makeCheck(item)

    if (item) {
      dispatch(addSelectedItem(item));
    }
  };

  
  return (
    <div className="xl:ml-[200px] lg:ml-[80px] md:ml-[80px] sm:ml-[80px] ssm:ml-[70px]  xl:mr-[200px] lg:mr-[120px] md:mr-[100px] sm:mr-[80px] ssm:mr-[80px] h-auto flex flex-col  items-center justify-center border-t-2 border-[#EFF2F5] mt-4">
      <div
        style={{ zIndex: 1000 }}
        className="mb-10 bg-white space-y-[50px]  w-[100%] h-auto mt-[40px] shadow-2xl shadow-[#00000014]  rounded-xl"
      >
        {currentQuestion === 8 ? (
          <div className=" ml-[9%]  mr-[9%] flex flex-col text-[20px]  items-center justify-center  font-serif font-semibold">
            <h2> {questions[currentQuestion].text}</h2>
            
          </div>
        ) : (
          <div className="ssm:ml-[10%] ssm:text-center ml-[5%]  mr-[5%] flex flex-col xl:text-[20px] lg:text-[20px] md:text-[17px] sm:text-[15px] ssm:text-[13px] mt-[120px] items-center justify-center  font-serif font-semibold">
            <h2> {questions[currentQuestion].text}</h2>
          </div>
        )}
        
        {notSelect && <h2 className="text-red-600 flex flex-col items-center justify-center">Please Fill Required Fields</h2>} 
        {firstSign && <h2 className="text-red-600 flex flex-col items-center justify-center">You Are On The First Page</h2>} 
        <div className="  flex  flex-col items-center justify-center  ">
          <RadioGroup className="flex  flex-col items-center justify-center mt-[20px] mb-[10%]  h-auto  w-[90%]  ">
            {questions[currentQuestion].options.length === 2 && (
              <div className="flex flex-col items-center justify-center xl:w-[90%] lg:w-[110%] md:w-[120%] sm:w-[120%] ssm:w-[150%] space-y-4 space-x-2 mb-[90px] ">
                {questions[currentQuestion].options.map((item, index) => (
                  <RadioGroup.Option
                    key={index}
                    className=" xl:w-[25%] lg:w-[25%] md:w-[30%] sm:w-[30%] ssm:w-[30%] "
                    value={"Sampel"}
                  >
                    <button
                      onClick={() =>
                        handleClick(
                          item,
                          questions[currentQuestion].key,
                          questions[currentQuestion].followUp[index],
                          index
                        )
                      }
                      className={`${
                        index === 0
                          ? `text-[#7B59FF] bg-[#EAE8FD] border hover:border-[#7B59FF] ${
                              focused === 0 ? "border-[#7B59FF]" : "border-none"
                            } `
                          : `text-[#EA31CC] bg-[#FDE8F9] border hover:border-[#EA31CC] ${
                              focused === 1 ? "border-[#EA31CC]" : "border-none"
                            } `
                      }  rounded-full  w-[100%] h-[45px] `}
                    >
                      {" "}
                      <span className="">{item}</span>
                    </button>
                  </RadioGroup.Option>
                ))}
              </div>
            )}

            {questions[currentQuestion].options.length === 4 && (
              <div className=" items-center md:justify-between w-[45%]  grid md:grid-cols-2 my-9 md:my-12 gap-5">
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
                          questions[currentQuestion].key,
                          questions[currentQuestion].followUp[index],
                          index
                        )
                      }
                      className={`${
                        index === 0
                          ? `text-[#7B59FF] bg-[#EAE8FD] border hover:border-[#7B59FF] ${
                              focused === 0 ? "border-[#7B59FF]" : "border-none"
                            } `
                          : index === 1
                          ? `text-[#EA31CC] bg-[#FDE8F9] border hover:border-[#EA31CC] ${
                              focused === 1 ? "border-[#EA31CC]" : "border-none"
                            } `
                          : index === 2
                          ? `text-[#B54800] bg-[#FDECE7] border hover:border-[#B54800] ${
                              focused === 2 ? "border-[#B54800]" : "border-none"
                            } `
                          : `text-[#04AE3E] bg-[#E6FEEE]  border hover:border-[#04AE3E]  ${
                              focused === 3 ? "border-[#04AE3E]" : "border-none"
                            } `
                      }  rounded-full  w-[100%] h-[45px] `}
                    >
                      {" "}
                      <span className="">{item}</span>
                    </button>
                  </RadioGroup.Option>
                ))}
              </div>
            )}
            {questions[currentQuestion].options.length > 4 && (
              <div className=" items-center md:justify-between w-[90%]    grid md:grid-cols-2 lg:grid-cols-3  my-9 md:my-12 gap-5">
                {questions[currentQuestion].options.map((item, index) => (
                  <RadioGroup.Option
                    key={index}
                    className={`text-[12px] bg-[#EEEEEE]  ${listbox.includes(item) ? " border border-red-600" : ""}   rounded-3xl flex flex-row gap-3 w-[100%] sm:w-[80%]  h-[55px] `}
                    value={"Sampel"}
                    
                  >
                    
                     <label htmlFor={`option-${index}`} className="flex flex-row items-center ml-[5%] w-[90%] cursor-pointer text-[13px]">
            <input
              type="checkbox"
              id={`option-${index}`}
              checked={listbox.includes(item)}
              onChange={() => handleCheckBox(item,index)}
              className="mr-2  bg-blue-500   "
            />
            {item}
          </label>
                  </RadioGroup.Option>
                ))}
              </div>
            )}
          </RadioGroup>
        </div>
      </div>

      <div className=" flex items-center cursor-pointer md:justify-between w-[100%] flex-col md:flex-row my-9 md:my-12 gap-5">
        <div
          onClick={handlePrev}
          className=" flex items-center w-[200px] rounded-full justify-center gap-4 bg-[#002868]"
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
          className="flex items-center w-[200px] rounded-full justify-center gap-4 bg-[#002868]"
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
