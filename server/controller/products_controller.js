import asyncHandler from "express-async-handler";
import productModel from "../databases/models/productModel.js";


const all = asyncHandler(async (request,response)=>{

    const data = await productModel.find();
    return response.status(200).json(data);

});

const getPro = asyncHandler(async (request,response) =>{

    const id = request.params.id;

    const prod= await productModel.findById(id);

    console.log(prod);
    return response.status(200).json(prod);
});

// const Patch = (request,response)=>{};
// const Delete = (request,response)=>{};

export  {all,getPro};