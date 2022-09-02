require("dotenv").config();

const express = require("express");
const prodRoute = require("./routes/product_route");
const app = express();

app.use(express.json());
app.get("/",(req,response)=>response.send("Gateway to Second Sale Api"));
app.use("/api",prodRoute);

app.listen(process.env.PORT,()=>console.log("coneected to server sucesfully"));