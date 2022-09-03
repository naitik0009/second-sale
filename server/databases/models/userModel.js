import mongoose from "mongoose";
import userSchema from "../schema/userSchemas.js"
const schemaUser = mongoose.Schema(userSchema,{timestamps:true});

const userModel = mongoose.model("Users",schemaUser);

export default userModel;