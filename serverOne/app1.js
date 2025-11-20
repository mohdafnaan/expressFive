import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.post("/login" , (req,res)=>{
    try {
        let userInput = req.body;
        console.log(userInput);
        let password = userInput.password;
        let id = userInput.id;


        if(password.length<3){
         return res.status(502).json({ msg : "password should be greater than 3 characters"});
        };


        res.status(200).json({msg : `your id is ${id} and your password is ${password} == sucessfully logined`})

        

    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.listen(port,()=>{
    console.log(`server running http://localhost:${port}/login`);
})