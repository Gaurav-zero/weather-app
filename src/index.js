import "./styles.css";
import { getWeatherInfo } from "./getWeatherInfo.js";
import { displayData } from "./displayData.js";
import loadingGif from "./spinner.gif";

const f= document.querySelector("form");
const city= document.querySelector("#city");
const table= document.querySelector("table");

f.addEventListener("submit", (e)=>{
    e.preventDefault();
    table.style.backgroundImage= loadingGif;

    let weatherData= getWeatherInfo(city.value);
    weatherData.then((data)=>{
        table.style.backgroundImage="none";
        console.log(data);
        displayData(data);
    })
});