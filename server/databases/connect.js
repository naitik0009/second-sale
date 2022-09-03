import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connect = async ()=>{
    try{
console.log("checking");
     await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser:true,
            },
            );

    }
    catch (error){
        console.error(error)
        process.exit(1);
    }
}

export default Connect;