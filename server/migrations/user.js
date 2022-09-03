import encode from "bcryptjs";

const user = [

    {
        name:"admin",
        email:"niko@gmail.com",
        password:encode.hashSync("123456",10),
        isAdmin:true,
    },
    {
        name:"suman",
        email:"suman@gmail.com",
        password:encode.hashSync("123456",10),

    },
    {
        name:"raghiv",
        email:"raghiv@gmail.com",
        password:encode.hashSync("123456",10),

    },
    {
        name:"arman",
        email:"arman@gmail.com",
        password:encode.hashSync("123456",10),

    },

];

export default user;