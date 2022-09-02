const data = require("../databases/product");

const all = (request,response)=>{
    return response.status(200).json(data);
};

const getPro = (request,response)=>{
    const id = request.params.id;
    const prod = data.map((inf)=>{
      return  inf._id===id?inf:"data not found";
    })
    return response.status(200).json({msg:"working route",data:prod});
};

// const Patch = (request,response)=>{};
// const Delete = (request,response)=>{};

module.exports = {all,getPro};