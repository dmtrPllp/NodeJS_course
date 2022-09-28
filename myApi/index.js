
import express from 'express';
import dotenv from 'dotenv';
import {router} from './users/users.js'
dotenv.config();
const PORT=process.env.PORT || 5000;

const app = express();

app.use((req,res,next)=>{
    console.log('ВРемя', Date.now());
    next();
});
app.get('/hello', (request,response)=>{
    throw new Error('Error');
});

app.use('/users', router);


app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send( err.message);
});
const start= async ()=>{
    try{
        app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`));
    } catch(e){
        console.log(e);
    }
}

start();