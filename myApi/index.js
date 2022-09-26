import url from 'url';
import http, { request } from 'http';
import express, { response } from 'express'
import dotenv from 'dotenv';
dotenv.config();
const PORT=process.env.PORT || 5000;

const app = express();

app.get('/hello', (request,response)=>{
    response.send('Hello');
});



const start= async ()=>{
    try{
       
        app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`));
    } catch(e){
        console.log(e);
    }
}

start();