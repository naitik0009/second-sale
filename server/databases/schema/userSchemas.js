const userSchema = {
  id:{
      type:String,
      unique: true,
  },
    name:{
      type:String,
        required:true,
    },
    email:{
      type:String,
        required: true,
        unique:true,
    },
    password:{
      type:String,
        required:[true,"please provide "],
        minLength:8,

    },
    isAdmin:{
    type:Boolean,
      required:[true,"please provide your identity"],
      default:false,
    },

};

export default userSchema;