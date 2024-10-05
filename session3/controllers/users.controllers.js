const users = require('../users.json');
// const axios = require('axios')
const userSearchSchema = require('../validations/searchuser.js');


const getUsersBySearch = async (req,res)=>{
    const {gender, age} = req.query;
    const {error} = userSearchSchema.validate({gender,age});
    if(error){
        return res.status(422).send({message: error})
    }
    
    // const users = (await axios.get("https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json")).data;
    // if(gender && !["male","female"].includes(gender)){
    //     return res.status(422).send({message:"Gender must be either 'male' or 'female'"});
    // }
    // if((age && isNaN(age)) || age<0 || age>100){
    //     return res.status(422).send({message:"Age must be a number between 0 and 100"});
    // }
    if(gender && age){
        const user = users.data.filter((user)=>user.gender === gender && user.dob.age === Number(age) );
        res.send(JSON.stringify(user));
    }
    else if(gender){
        const user = users.data.filter((user)=>user.gender === gender);
        res.send(JSON.stringify(user));
    }
    else if(age){
        const user = users.data.filter((user)=>user.dob.age === Number(age) );
        res.send(JSON.stringify(user));
    }
    
}

const getUsersByUUID = (req, res)=>{
    const {uuid} = req.params;
    const user = users.data.find((item)=>item.login.uuid === uuid)
    if(user)
        return res.send(JSON.stringify(user));
    else{
        res.sendStatus(404);
    }
}

const getAllUsers = (req, res)=>{
    res.send(JSON.stringify(users.data));
}
module.exports = {getUsersBySearch,getUsersByUUID, getAllUsers}