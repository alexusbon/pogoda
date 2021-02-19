import { App } from "./components.js";
import {  getFilteredData, render } from "./functions.js";

async function getWeather(city = "Minsk") {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c026b7e260ea6a4cea507080c2ca5e3f&units=metric`);
    const data = await response.json();
    const timeZoneResponse = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=95WHPNRO6JMC&format=json&by=position&lat=${data.city.coord.lat}&lng=${data.city.coord.lon}`)
    const timeZoneData = await timeZoneResponse.json();
    const filteredData = getFilteredData(data, timeZoneData)

    render(
        App, 
        document.getElementById("page"),
        filteredData
    );
    
    document.getElementById("input").addEventListener("keypress", event => {
        if(event.key !== "Enter") return;
        event.preventDefault()
        getWeather(event.target.innerHTML);
        event.target.innerHTML = null;
    });
}

getWeather()


