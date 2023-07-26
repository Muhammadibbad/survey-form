import React, { useState } from 'react';

interface Question {
  text: string;
  options: string[];
  followUp: [number, number ] | null;
}

const questions: Question[] = [
  {
    // 0
    text: "Are you an elected official or candidate office?",
    options: ["Yes", "No"],
    followUp: [1, 2],
  },
  {
    // 1
    text: "Which party do you consider?",
    options: ["Democratic", "Republican"],
    followUp: null,
  },
  {
    // 2
    text: "Are you registered to vote?",
    options: ["Yes", "No"],
    followUp: [3, 4],
  },
  {
    // 3
    text: "Do you plan on voting for 2024?",
    options: ["Yes", "No"],
    followUp: [6,0],
  },
  {
    // 4
    text: "Do you know how to register to vote?",
    options: ["Yes", "No"],
    followUp: [6,6],
  },
  {
    // 5
    text: "Do you consider yourself a political party?",
    options: ["Yes", "No"],
    followUp: [1,0]
  },
  {
    // 6
    text: "Do you plan on registering to vote?",
    options: ["Yes", "No"],
    followUp: [3,5],
  },
  
];

const SurveyForm: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswerSelection = (answer: string) => {
    const updatedAnswers = [...answers];
    
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);

    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.followUp) {
      setCurrentQuestionIndex(
        answer === "Yes" ? currentQuestion.followUp[0] : currentQuestion.followUp[1]
      );
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSubmit = () => {
    // Implement the logic to process the survey results here
    // For example, you can access the user's answers and do something with them
    alert("Survey submitted successfully!");
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <p>{questions[currentQuestionIndex].text}</p>
          {questions[currentQuestionIndex].options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={answers[currentQuestionIndex] === option}
                onChange={() => handleAnswerSelection(option)}
              />
              <label>{option}</label>
            </div>
          ))}
          <div className=''>

          <div>
            <button>Previous</button>
          </div>
          <div>
          {currentQuestionIndex === questions.length - 1 ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex + 1)}>Next</button>
          )}
          </div>
          </div>
        </div>
      ) : (
        <p>Thank you for completing the survey!</p>
      )}
    </div>
  );
};

export default SurveyForm;
