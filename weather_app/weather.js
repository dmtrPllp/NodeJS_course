#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import { getWeather } from './services/api-service.js';
import { printHelp, printSuccess, printError } from './services/log-service.js';
import { saveKeyValue , TOKEN_DICTIONARY} from './services/storage-service.js';

const saveToken=async (token)=>{
    if(!token.length){
        printError('Токен не передан');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранён');
    }
    catch(e){
        printError(e.message);
    }
    
};

const initCLI=async ()=>{
    const args=getArgs(process.argv);
    if(args.h){
        printHelp();
    }
    if(args.s){
        
    }
    if(args.t){
        return await saveToken(args.t);
    }
    getWeather('moscow');
    //show weather
}
initCLI(); 