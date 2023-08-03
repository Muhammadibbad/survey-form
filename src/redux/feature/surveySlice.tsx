"use client"
import {createSlice,PayloadAction} from "@reduxjs/toolkit"


  type surveyType = {
    officialCandidate: string;
    registeredVote: string;
    Party: string;
    votingPlan: string;
    registeredHow: string;
    considerParty: string;
    whyNot: string;
    registerPlan: string;
    multiple:string[]
  };
  const initialState: surveyType = {
    officialCandidate: "",
    registeredVote: "",
    Party: "",
    votingPlan: "",
    registeredHow: "",
    considerParty: "",
    whyNot: "",
    registerPlan: "",
    multiple:[]
  };

const survey =createSlice({
      name:"survey",
      initialState,
      reducers:{
        addSurvey(state,action:PayloadAction<any>){
          console.log("state" ,state)
          console.log("action",action)
          console.log(action.payload.multiple)
         state.officialCandidate=action.payload.officialCandidate
         state.registeredVote=action.payload.registeredVote
         state.Party=action.payload.Party
         state.votingPlan=action.payload.votingPlan
         state.registeredHow=action.payload.registeredHow
         state.considerParty=action.payload.considerParty
         state.whyNot=action.payload.whyNot
         state.registerPlan=action.payload.registerPlan
            
         
        },
        addSelectedItem: (state, action) => {
          
          const index = state.multiple.indexOf(action.payload);
          if (index === -1) {
            
            state.multiple.push(action.payload) 
          }else{
            state.multiple.splice(index, 1);
          }
       
        },
        
    }
})


export const { addSurvey,addSelectedItem} = survey.actions;
export default survey.reducer;

