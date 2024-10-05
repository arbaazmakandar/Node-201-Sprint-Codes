const users = require('../users.json');
// const axios = require('axios')


const getUsersBySearch = async (req,res)=>{
    const {gender, age} = req.query;
    // const users = (await axios.get("https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json")).data;
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
    else{
        res.status(400).send({message:"One of 'gender' or 'age' must be passed"}) //Not Found
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