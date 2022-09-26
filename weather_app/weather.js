#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import { getIcon, getWeather } from './services/api-service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log-service.js';
import { saveCityValue, saveKeyValue , TOKEN_DICTIONARY} from './services/storage-service.js';

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
const saveCity=async (city)=>{
    if(!city.length){
        printError('Город не указан');
        return;
    }
    try{
        await saveCityValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Город сохранён');
    }
    catch(e){
        printError(e.message);
    }
    
};

const getForCast=async ()=>{
    try{
        const weather=await getWeather();
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch(e){
        if(e?.response?.status == 404){
            printError('Неверно указан город');
        }
        else if(e?.response?.status == 401){
            printError('Неверно указан токен');
        }
        else {
            printError(e.message);
        }
    }
    
};

const initCLI=async ()=>{
    const args=getArgs(process.argv);
    
    if(args.h){
        return printHelp();
    }
    if(args.s){
        
        return await saveCity(args.s);
    }
    if(args.t){
        return await saveToken(args.t);
    }
    return getForCast();
}
initCLI(); 