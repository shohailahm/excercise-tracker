const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();

const app=express();
const port =process.env.PORT||5000;
const uri=process.env.URI;
console.log(uri+"url");
app.use(cors());
app.use(express.json());


const connect=()=>{
    mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
    .then(res=>{
     
    }
    )
    .catch(err=>{console.log(err)
        console.warn("connecting after 5 seconds");
        setTimeout(connect, 5000)
    }) 
}

connect();
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Connected To mongoDb");
})

const userRouter=require('./Routes/user');
const excersieRouter=require('./Routes/excerise');

app.use('/users',userRouter);
app.use('/excercise',excersieRouter);

app.listen(port,()=>{
    console.log('Server Started');
}); 