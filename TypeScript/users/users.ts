import express from 'express';

const userRouter=  express.Router();

userRouter.use((req,res,next) => {
    console.log('Обработчик');
    next();
});

userRouter.post('/login', (req ,res)=>{

});

export {userRouter};