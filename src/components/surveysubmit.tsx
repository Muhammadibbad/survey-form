import React, { useState } from "react";
import Image from "next/image";
import CoverImg from "../../public/pexels-mat-brown-899330 1.png";
import GotoSurvey from "../../public/Group 1.png";
import Link from "next/link";
import axios from "axios";


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
  

const Surveysubmit = () => {
    const [userDel,setUserDel]=useState<Adtype>(initialState)
    const {name,email,bio,about,password,repassword}=userDel
  const [showPass, setShowPass] = useState(true);
  const [reShowPass, setReShowPass] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [inputZip, setInputZip] = useState("");
  
 console.log(userDel)


  const handleChange = (e: any) => {
    setUserDel({ ...userDel, [e.target.name]: e.target.value })
  }

  const preventMinus = async(event:any) => {
    let value = event.target.value;

    // Remove any negative sign from the input value
    value =await value.replace(/-/g, '');

    // Update the input field value
    setUserDel({ ...userDel, [event.target.name]: event.target.value })
    setInputValue(value);
  };
  
  const preventZip = async(event:any) => {
    let value = event.target.value;

    // Remove any negative sign from the input value
    value =await value.replace(/-/g, '');

    // Update the input field value
    setUserDel({ ...userDel, [event.target.name]: event.target.value })
    setInputZip(value);
  };
  
  const togglePasswordVisibility = () => setShowPass(!showPass);
  const toggleRePasswordVisibility = () => setReShowPass(!reShowPass);

  const handleSubmit=async(e:any)=>{
    e.preventDefault()
   if(password!==repassword ){
   alert("Password not match")
   }
   else if(inputZip.length !== 5 ){
    alert("Zipcode must be of 5 number only")
    }
    
    else{
        try {
            const response = await axios.post('/api/profile', userDel);
            console.log('Data successfully sent:', response.data);
            alert('Data submitted successfully!');
           
          } catch (error) {
            console.error('Error submitting data:', error);
            alert('An error occurred. Please try again later.');
          }
    }
  }
  return (
    <div className="absolute  xl:w-[33%] ssm:w-[70%] sm:w-[70%] md:w-[70%] lg:w-[60%]  backdrop-blur-2xl !mr-[40%]   bg-opacity-10 bg-white rounded-3xl   h-auto">
      <div className=" w-[90%] mb-[5%] space-y-4 ml-[5%] mt-2 ">
        <div className=" ">
          <Image src={GotoSurvey} alt="Logo is Missing"></Image>
        </div>
        <div className="text-[25px] text-white ">
          <h2>THANK YOU FOR COMPLETING THE SURVEY</h2>
        </div>
        <div className="text-[18px] font-sans text-white  ">
          If you'd like to have your profile viewable by our members, please
          fill out the following information
        </div>
        <form onSubmit={handleSubmit}>
        <div className="space-y-2">
        <div>
          <input
            name="name"
            required
            value={name}
            onChange={handleChange}
            className="w-[95%] p-2 pb-8 focus:outline-none border text-white border-white h-[50px] rounded-md appearance-none bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
            type="text"
            placeholder="Full Name"
          />
        </div>

        <select name="candidate" onChange={handleChange} className="w-[95%] p-2 pb-6 text-[10px] focus:outline-none  border text-white  border-white h-[50px] rounded-md  bg-transparent ">
          <option className="!text-[15px] !text-black " disabled selected>
            Office you hold or are a candidate for
          </option>
          <option className="!text-[15px] !text-black" value="Office">
            Office
          </option>
          <option className="!text-[15px] !text-black" value="Candidate">
            Candidate
          </option>
        </select>

        <div>
          <input
            name="email"
            onChange={handleChange}
            required
            value={email}
            className="w-[95%] p-2 pb-7 focus:outline-none border text-white border-white focus:bg-transparent h-[50px] rounded-md  bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            name="contact"
            className="w-[95%] p-2 pb-7 focus:outline-none border text-white border-white h-[50px] rounded-md appearance-none bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
            type="number"
            
            onChange={preventMinus}
            value={inputValue}
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            name="zipcode"
            onChange={preventZip}
            value={inputZip}
            maxLength={5}
            minLength={1}
            
            className="w-[95%] p-2 pb-7 focus:outline-none border text-white border-white h-[50px] rounded-md appearance-none bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
            type="number"
            placeholder="Zip Code"
          />
        </div>
        <div>
          <input
            name="bio"
            onChange={handleChange}
            value={bio}
            className="w-[95%] p-2 pb-7 focus:outline-none border text-white border-white h-[50px] rounded-md appearance-none bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
            type="text"
            placeholder="Biography"
          />
        </div>
        <div>
          <input
            name="about"
            onChange={handleChange}
            value={about}
            className="w-[95%] p-2 pb-7 focus:outline-none border  text-white border-white h-[50px] rounded-md appearance-none bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
            type="text"
            placeholder="What you want Marin voters to know about you"
          />
        </div>

        <div className="flex border border-white w-[95%] rounded-md">
          <div className="w-[95%] ">
            <input
              name="password"
              onChange={handleChange}
              value={password}
              required
              maxLength={20}
              minLength={5}
              
              className="w-[100%] p-2 pb-7 focus:outline-none  text-white h-[50px]  appearance-none bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
              type={showPass ? "password" : "text"}
              placeholder="Password"
            />
          </div>
          {showPass ? (
            <div
              onClick={togglePasswordVisibility}
              className="flex flex-col justify-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 cursor-pointer h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={togglePasswordVisibility}
              className="flex flex-col justify-center "
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 cursor-pointer h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="flex border border-white w-[95%] rounded-md">
          <div className="w-[95%] ">
            <input
              name="repassword"
              required
              value={repassword}
              onChange={handleChange}
              maxLength={20}
              minLength={5}
              className="w-[100%] p-2 pb-7 focus:outline-none  text-white h-[50px]  appearance-none bg-transparent placeholder:text-[10px] placeholder:mr-3 placeholder-white"
              type={reShowPass ? "password" : "text"}
              placeholder="Re-Enter Password"
            />
          </div>
          {reShowPass ? (
            <div
              onClick={toggleRePasswordVisibility}
              className="flex flex-col justify-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 cursor-pointer h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={toggleRePasswordVisibility}
              className="flex flex-col justify-center "
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 cursor-pointer h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
          )}
         
        </div>
        
         <div className=' w-[90%] flex flex-col items-center justify-center  h-[60px]'><button  type="submit" className=" text-[13px] flex flex-col items-center  bg-[#002868] text-white justify-center  h-[60px] w-[100%] rounded-full">Sign in</button></div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Surveysubmit;
