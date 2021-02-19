export const render = (component, target, props) => {
    target.innerHTML = component(props);
}


export const getFilteredData = incomeData => {
    const currentTime = incomeData.list[0].dt_txt.split(" ")[1].slice(0,5);
    const currentDate = new Date((incomeData.list[0].dt-3*3600)*1000).toDateString().split(" ");
    const currentWeather = incomeData.list[0].weather[0].description.toUpperCase();
    const currentTemp = incomeData.list[0].main.temp.toFixed();
    const currentImg = incomeData.list[0].weather[0].icon;

    return  {
        city: incomeData.city.name,
        currentTime,
        currentDate,
        currentWeather,
        currentTemp,
        currentImg,
        allWeather: incomeData.list
    }
}