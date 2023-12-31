import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === "POST") {
    // You can handle the form submission here
    // For this example, we'll just log the data received from the form
    console.log("Received form data:", req.body);
    
    const data = req.body;
//     const dict:{ [key: string]: any }={}
// for(var i in data){
//     if(data[i]!==""){
//         dict[i]=data[i]
//     }
    
// }
    // Return a response indicating success
    return res
      .status(200)
      .json({ message: "Form data received successfully!", data });
  } else {
    // If a non-POST request is made to this endpoint, return an error
    res.status(405).json({ error: "Method not allowed" });
  }
}
