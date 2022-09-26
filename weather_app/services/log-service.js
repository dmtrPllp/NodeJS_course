import chalk from 'chalk';
import dedent from 'dedent-js';


const printError=(error)=>{
    console.log(chalk.bgRed('ERROR') + ' ' + error);
};
const printSuccess=(message)=>{
    console.log(chalk.bgGreen('Success') + ' ' + message);
};
const printHelp=()=>{
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
    );
};

const printWeather= (res, icon)=>{
    console.log(
        dedent`${chalk.bgGreenBright(' WEATHER ')} Погода в городе ${res.name}
        \t${icon}  ${res.weather[0].description}
        \tВлажность воздуха: ${res.main.humidity}%, Скорость ветра: ${res.wind.speed}(м/с)
        \tТемпература: ${res.main.temp}°C (ощущается как ${res.main.feels_like}°C)
        \tАтмосферное давление: ${res.main.pressure}мм рт. ст.
        \tРассвет: ${(new Date(res.sys.sunrise)).toLocaleTimeString()}AM,  Закат: ${(new Date(res.sys.sunset)).toLocaleTimeString()}PM 
        
        `
    );
}

export {printError, printSuccess, printHelp, printWeather};