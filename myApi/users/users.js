import express from 'express';

const router= express.Router();

router.use((req,res,next)=>{
    console.log('Обработка');
    next();
});

router.post('/login', (req,res)=>{
    res.end('login')
});

router.post('/register', (req,res)=>{
    res.end('register')
});


export {router};