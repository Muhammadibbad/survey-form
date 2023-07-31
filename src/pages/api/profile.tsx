export default function handler(req:any, res:any) {
   
    console.log(req.body)
    console.log(req.method)
    if (req.method === 'POST') {
      const { name, email, contact,bio } = req.body;
  
      // You can handle the form submission here
      // For this example, we'll just log the data received from the form
      console.log('Received form data:', { name, email, contact,bio });
      const data={ name, email, contact,bio }
    console.log("This",data)
      // Return a response indicating success
     return res.status(200).json({ message: 'Form data received successfully!', data });
    } else {
      // If a non-POST request is made to this endpoint, return an error
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  