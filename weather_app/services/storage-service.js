import {homedir} from 'os';
import {join} from 'path';
import {promises} from 'fs'

const filePath = join(homedir(),'weather-data.json');

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
};

const saveKeyValue=async (key, value)=>{
    let data={};
    if(await isExist(filePath)){
        const file=await  promises.readFile(filePath);
        data=JSON.parse(file);
    }
    data[key]=value;
    await promises.writeFile(filePath,JSON.stringify(data));
};

const saveCityValue=async (key, value)=>{
    let data={};
    if(await isExist(filePath)){
        const file=await  promises.readFile(filePath);
        data=JSON.parse(file);
    }
    data[key]=value;
    await promises.writeFile(filePath,JSON.stringify(data));
};

const getKeyValue= async (key) =>{
    let data={};
    if(await isExist(filePath)){
        const file=await  promises.readFile(filePath);
        data=JSON.parse(file);
        return data[key];
    }
    return undefined;
};

const getCityValue= async (key) =>{
    let data={};
    if(await isExist(filePath)){
        const file=await  promises.readFile(filePath);
        data=JSON.parse(file);
        return data[key];
    }
    return undefined;
};

const isExist=async (path)=>{
    try{
        await promises.stat(path);
        return true;
    }
    catch(e){
        return false;
    }
   //await promises.access(path).then(()=>{return true}).catch((e)=>{return false});
};

const fileRead=async (path)=>{
    const file=await  promises.readFile(path);
    let d=JSON.parse(file);
    return d;
}
export {saveKeyValue, getKeyValue,TOKEN_DICTIONARY, saveCityValue, getCityValue};