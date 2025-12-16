import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
});

app.get("/api/hello",(req,res)=>{
    res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});