
import axios from 'axios';
import https from 'node:https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage-service.js';

const getWeather = async (city)=>{
   // const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const token= await getKeyValue(TOKEN_DICTIONARY.token);
    if(!token){
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
    }
    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');
    // https.get(url, (res)=>{
    //     let result='';
    //     res.on('data', (data)=>{
    //         result+=data;
    //     });
    //     res.on('end', ()=>{
    //         console.log(result);
    //     });

    // });
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params:{
            q:city,
            appid:token,
            lang:'ru',
            units: 'metric'
        }
    });
    console.log(data);
    return data;
};

export {getWeather};