import express from "express";
const app = express();
app.use(express.json())
const port = 5000
app.post("/login" , (req,res)=>{
    try {
        let userInput = req.body;
        console.log(userInput);
        res.status(200).json({ msg : userInput})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : error})
    }
})
app.listen(port,()=>{
    console.log(`server started at port 5000  http://localhost:${port}`);
})