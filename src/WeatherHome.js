import React ,{useState} from "react";
import './weather.css'
import WeatherInfo from './WeatherInformation'
import Forecast from './Forecast.js'
import axios from "axios";

export default function Weather(props){ 
    const [weatherData , setWeatherdata] = useState({ready: false});
    const[city,setCity] = useState(props.defaultCity)
    function handleResponse(response){
        console.log(response.data)
        setWeatherdata({
            ready : true,
            temperature: response.data.main.temp,
            coord: response.data.main.coord,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city : response.data.name,
            date:new Date(response.data.dt *1000),
        })

    }
    function search(){
        // city
        const apiKey = "3f6be1c407b0d9d1933561808db358ba";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event){
        event.preventDefault()
        search()
    }
    function handleCityChange(event){
        setCity(event.target.value)
    }
    if (weatherData.ready){
    return(
        
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coord}/>
        {/* <WeatherForecast coordinates={weatherData.coordinates} /> */}
      </div>
      )
    } else{
        search()
    return "Loading..."
    }
}