import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import CoverImg from "../../public/pexels-mat-brown-899330 1.png";
import GotoSurvey from "../../public/Group 1.png";
import Surveystart from "./surveystart";
import Surveysubmit from "./surveysubmit";
import Surveyconsider from "./surveyConsider";
import { useSelector } from "react-redux";

const Surveyhome = () => {
  const SurveyData = useSelector((state: any) => state.user);

  const [progress, setprogress] = useState(0);
  //  make
  console.log(SurveyData);
  console.log(SurveyData.electedOfficial);

  const CheckPage = () => {
    if (
      SurveyData.considerParty === "" &&
      (SurveyData.officialCandidate === "Yes" ||
        SurveyData.officialCandidate === "No")
    ) {
      setprogress(1);
      console.log("Submit");
    } else if (
      (SurveyData.considerParty === "No" ||
        SurveyData.considerParty === "Yes") &&
      SurveyData.officialCandidate === "No"
    ) {
      setprogress(2);
      console.log("Consider");
    } else {
      setprogress(0);
      console.log("Home");
    }
  };

  useEffect(() => {
    CheckPage();
  }, [SurveyData]);
  return (
    <div className="flex flex-col items-center justify-center bg-center h-screen bg-cover bg-cover-image object-center bg-fixed  ">
      {progress === 0 ? (
        <div className="ssm:ml-[20%] md:ml-0 ">
          <Surveystart />{" "}
        </div>
      ) : progress === 1 ? (
        <Surveysubmit />
      ) : (
        <Surveyconsider />
      )}
    </div>
  );
};

export default Surveyhome;
