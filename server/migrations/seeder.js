import orderModel from "../databases/models/orderModel.js";
import dotenv from "dotenv";
dotenv.config();
import userData from "./user.js";
import productData from "./product.js";
import userModel from "../databases/models/userModel.js";
import productModel from "../databases/models/productModel.js";

import connectDB from "../databases/connect.js";
import mongoose from "mongoose";
connectDB().then(()=>console.log("connected"));
const importData = async ()=>{
    try{
      await  orderModel.deleteMany();
      await  userModel.deleteMany();
      await  productModel.deleteMany();

        const createUser = await userModel.insertMany(userData).then(()=>console.log("user created"));
        const adminUser = await userModel.find({isAdmin:true});
        console.log(adminUser[0]._id);
        // let id=mongoose.Types.ObjectId(adminUser[0]._id.trim());
       // adminUser? adminUser._id=id : console.log("no id found");
        const createProduct = productData.map((data)=>{
            return {...data,user:adminUser[0]};
        });

        // console.log(adminUser,createProduct);
        await productModel.insertMany(createProduct).then(()=>console.log("product created"));
    process.exit();
console.log("Data imported successfully".green);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
                    }
};

const destroyData = async ()=>{
try{
   // await orderModel.deleteMany();
  await  userModel.deleteMany();
  await  productModel.deleteMany();
  console.log("data destroyed".bgRed)
    process.exit();
}catch (e) {
console.log(`${e}`.bgCyan);
}
};

if(process.argv[2]==="-d"){
    destroyData().then(()=>console.log("destroy data"));
}else if(process.argv[2]==="-i"){
    importData().then(()=>console.log("createdsa"));
}