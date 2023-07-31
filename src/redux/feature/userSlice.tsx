"use client"
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface Adtype {
    name: string,
    email:  string,
    contact: number|null,
    zipcode:  number|null,
    bio: string,
    about: string,
    password: string,
    repassword: string,
    candidate:string,
  
  }

const initialState: Adtype = {
    name: "",
    email: "",
    contact: null,
    zipcode: null,
    bio:"",
    about:"",
    password:"",
    repassword:"",
   candidate:""
    
  
  }
  

const profile =createSlice({
      name:"profile",
      initialState,
      reducers:{
        addProfile(state,action:PayloadAction<any>){
          console.log("state" ,state)
          console.log("action",action)
         state.name=action.payload.name
         state.email=action.payload.email
         state.contact=action.payload.contact
         state.zipcode=action.payload.zipcpde
         state.bio=action.payload.bio
         state.about=action.payload.about
         state.password=action.payload.password
         state.repassword=action.payload.repassword
         state.candidate=action.payload.candidate
        },
       
        
      }
})


export const { addProfile} = profile.actions;
export default profile.reducer;

