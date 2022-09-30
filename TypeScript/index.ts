import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./users/users.js";

const port= 5000;
const app= express();

userRouter.use((req,res,next) => {
    console.log('Time', Date.now());
    next();
});


app.get('/hello', (req,res)=>{
    throw new Error('ERROR');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response , next: NextFunction)=>{
    console.log(err.message);
    res.end(err.message);
});

app.listen(port, ()=>console.log(`http://localhost:${port}`));
