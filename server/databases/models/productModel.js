import mongoose from "mongoose";
import schema from "../schema/productSchema.js";


const productModel = mongoose.model("Products",schema);

export default productModel;