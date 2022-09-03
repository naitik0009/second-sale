import mongoose from "mongoose";

const orderSchema = {
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Users",
    },

    orderItems : [
        {
            name:{type:String,required:true},
            qty:{type:Number,required:true},
            image:{type:String,required:true},
            price:{type:Number,required:true},
            product : {
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Products",
            }

        }
    ],

    shipping:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalCode : {type:String,required:true},
        country:{type:String,required:true},
    },

    paymentMethod:{
        type:String,
        required:true,
        default:false,
    },

    paymentResult:{
        id:{type:String,required:true},
        status:{type:String,required:true},
        update_time:{type:String,required:true},
        email_address:{type:String,required:true}
    },

    totalPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false,
    },
    paidAt:{
        type:Date,
    },
    isDelivered:{
        type:Boolean,
        require:true,
        default:false,
    },
    deliveredAt:{
        type:Date,
    }


};

export default mongoose.Schema(orderSchema,{timestamps:true});
