const express = require('express');
const app = express();
const PORT = 8082;
const { getCurrencies, getCurrencyBySymbol } = require('./controllers/currencies.controllers.js');
const {getUsersBySearch, getUsersByUUID, getAllUsers} = require('./controllers/users.controllers.js')

app.get('/',(req,res)=>{
    res.send('<h1>Currency Database</h1>');
})
app.get('/currencies',getCurrencies)

app.get('/currencies/:symbol',getCurrencyBySymbol)
// app.get('/posts/:postId/comments/:commentId',(req,res)=>{
//     console.log(req.params);
//     res.send(JSON.stringify(currencies.data));
// })

app.get('/users',getAllUsers);
app.get('/users/search', getUsersBySearch);
app.get('/users/:uuid',getUsersByUUID);


// app.get('/posts/:postId/comments/:commentId',(req,res)=>{
//     console.log(req.params);
//     res.send(JSON.stringify(currencies.data));
// })


app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT, ${PORT}`);
})