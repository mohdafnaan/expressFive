import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.post("/register", (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);

    let pass = req.body.password;
    console.log(pass);

    if (req.body.password.length  < 8) {
      return res.status(502).json({ msg: "password should be greater than 8 charachters" });
    }

    res.status(200).json({ msg: "registered succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.listen(port, () => {
  console.log(
    `server ready for registration  http://localhost:${port}/register`);
});
