import "./styles.css";
import { getWeatherInfo } from "./getWeatherInfo.js";
import { displayData } from "./displayData.js";

const f= document.querySelector("form");
const city= document.querySelector("#city");

f.addEventListener("submit", (e)=>{
    e.preventDefault();
    let weatherData= getWeatherInfo(city.value);
    weatherData.then((data)=>{
        console.log(data);
        displayData(data);
    })
});