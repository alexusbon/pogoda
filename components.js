export function App(props) {
 
  return `
    <div id="background"></div>

    <div id="nedelia">${WeatherList(props.allWeather)}</div>

    <div id=acity>
      <div id="input" class='text test'
        id="town" contenteditable="true" 
        style="font-size: 25px;" 
        placeholder="${props.city}"
      ></div>
    </div>
    
    <span id="month">${props.currentDate[0]}</span>
    <span id="day">${props.currentDate[1]}</span>
    <span id="time">${props.currentTime}</span>
    <span id="weather">${props.currentWeather}</span>
    
    <div id=temp class="top text temp" style="font-size: 45px">${props.currentTemp}°</div>
    
    <div class="jpg">
      <img src="http://openweathermap.org/img/wn/${props.currentImg}@2x.png" class="position_sun sun" alt="">
      
    </div>
  </div>
  `
}

export function WeatherList(props) {
  return `
      <div id="day4">
        <span id="name_day">${new Date((props[32].dt-3*3600)*1000).toDateString().split(" ")[0]}</span>
        <div id="pict4">
          <img src="http://openweathermap.org/img/wn/${props[32].weather[0].icon}@2x.png" alt="">
        </div>
        <span id="temp_ned">${props[32].main.temp.toFixed()}</span>
      </div>
      <div id="day3">
        <span id="name_day">${new Date((props[24].dt-3*3600)*1000).toDateString().split(" ")[0]}</span>
        <div id="pict3">
          <img src="http://openweathermap.org/img/wn/${props[24].weather[0].icon}@2x.png" alt=""></div>
        <span id="temp_ned">${props[24].main.temp.toFixed()}</span>
      </div>
      <div id="day2">
        <span id="name_day">${new Date((props[16].dt-3*3600)*1000).toDateString().split(" ")[0]}</span>
        <div id="pict2">
          <img src="http://openweathermap.org/img/wn/${props[16].weather[0].icon}@2x.png" alt="">
        </div>
        <span id="temp_ned">${props[16].main.temp.toFixed()}</span>
      </div>
      <div id="day1">
        <span id="name_day">${new Date((props[8].dt-3*3600)*1000).toDateString().split(" ")[0]}</span>
        <div id="pict1">
          <img src="http://openweathermap.org/img/wn/${props[8].weather[0].icon}@2x.png" alt="">
        </div>
        <span id="temp_ned">${props[8].main.temp.toFixed()}</span>
      </div>
  `
}