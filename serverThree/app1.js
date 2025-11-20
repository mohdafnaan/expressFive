import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.post("/signup",(req,res)=>{
    try {
        let userInput = req.body;
        console.log(userInput);
        let password = userInput.password;
        let userId = userInput.userId;
        console.log(password);
        console.log(userId);


        if(password.length < 7){
            return res.status(502).json({msg : "password should be greater than 8 characters"})
        }

      res.status(200).json({msg : "signed up succesfull"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.listen(port,()=>{
    console.log(`server started for signup http://localhost:${port}/signup`);
})