import dotenv from "dotenv";

dotenv.config();

import express from "express";

import prodRoute from "./routes/product_route.js";
import Connect from "./databases/connect.js";
const app = express();

app.use(express.json());
app.get("/",(req,response)=>response.send("Gateway to Second Sale Api"));
app.use("/api",prodRoute);

app.listen(process.env.PORT,()=>{
    if(Connect()){
        console.log("connected to db");
    };
    console.log("coneected to server sucesfully")});

