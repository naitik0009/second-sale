import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rating:{type:Number,required:true},
    comment:{type:String,required:true},
},{timestamps:true});

const productSchema = {
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Users", /*Here we are creating a relation between user and product model */
    },
    name:{
        required: true,
        type:String,

    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    numReviews:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
        default: 0,
    },
};


export default mongoose.Schema(productSchema,{timestamps:true});