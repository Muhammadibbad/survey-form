import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === "POST") {
    

    console.log("Received form data:", req.body);
    const data = req.body;



    return res
      .status(200)
      .json({ message: "Form data received successfully!", data });
  } else {
    // If a non-POST request is made to this endpoint, return an error
    res.status(405).json({ error: "Method not allowed" });
  }
}
