const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require("./db/config.js")
const userRouter = require('./routes/users.routes.js')
const currencyRouter = require('./routes/currencies.routes.js')
const blogRouter = require("./routes/blogs.routes.js")




const app = express();
const PORT = 8082;
app.use(express.json());
connectDB();


// const { getCurrencies, getCurrencyBySymbol } = require('./controllers/currencies.controllers.js');
// const {getUsersBySearch, getUsersByUUID, getAllUsers} = require('./controllers/users.controllers.js')

// app.get('/',(req,res)=>{
//     res.send('<h1>Currency Database</h1>');
// })

// app.get('/posts/:postId/comments/:commentId',(req,res)=>{
//     console.log(req.params);
//     res.send(JSON.stringify(currencies.data));
// })


// app.get('/posts/:postId/comments/:commentId',(req,res)=>{
    //     console.log(req.params);
    //     res.send(JSON.stringify(currencies.data));
// })
    
app.use("/users",userRouter);
app.use("/currencies",currencyRouter);
app.use("/blogs",blogRouter);


app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT, ${PORT}`);
})