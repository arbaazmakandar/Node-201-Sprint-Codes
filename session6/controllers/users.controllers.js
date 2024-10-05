const users = require('../users.json');
// const axios = require('axios')



const getUsersBySearch = async (req,res)=>{
    const {gender, age} = req.query;
    

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
    return res.send(JSON.stringify(users.data));   
}
module.exports = {getUsersBySearch,getUsersByUUID, getAllUsers}