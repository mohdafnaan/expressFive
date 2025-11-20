import express from "express";
import dotenv from "dotenv";
import { useReducer } from "react";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.post("/signin" , (res,req)=> {
    try {
        let userInput = req.body;
        console.log(userInput);
        let userId = userInput.userId;
        let password = userInput.password;
        console.log(userId);
        console.log(password);
        if(password.length < 8){
            return res.status(502).json({ msg : "password should be greater than 8 characters"})
        }
        res.status(200).json({msg : "signedIn succesfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.listen(port , ()=>{
    console.log(`server ready for signin  http://localhost:${port}/signin`);
})