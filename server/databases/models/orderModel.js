import mongoose from "mongoose";
import ordSch from "../schema/orderSchema.js";

const orderModel = mongoose.model("Orders",ordSch);

export default orderModel;