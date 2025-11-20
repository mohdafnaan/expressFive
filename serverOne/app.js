import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
let a = "*";

app.post("/userinput", (req, res) => {
  try {
    let userInput = req.body;
    console.log(a);
    res.status(200).json({ msg: userInput });
    a += "*";
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.listen(PORT, () => {
  console.log(`server started  http://localhost:${PORT}/login`);
});
