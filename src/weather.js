import React ,{useState} from "react";
// import {InfinitySpin} from 'react-loader-spinner'
import './weather.css'
import FormatteDate from './formatteDate'
import axios from "axios";

export default function Weather(props){ 
    const [weatherData , setWeatherdata] = useState({ready: false});

    function handleResponse(response){
        console.log(response.data)
        setWeatherdata({
            ready : true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            desceription: response.data.weather[0].desceription,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
             wind: response.data.wind.speed,
            city : response.data.name,
            date:new Date(response.data.dt *1000),
        })

    }

    if (weatherData.ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                    <input type="search" placeholder="search for city.." className="form-control"
                    autoFocus="on"/>
                    </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li><FormatteDate date={weatherData.date}/></li>
                <li className="text-capitalize">desceription :{weatherData.desceription}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt="weatherData.desceription"/> 
                     <span className="temperature"> {Math.round(weatherData.temperature)}</span>
                     <span className="unit">°C</span>
                     </div>
                     <div className="col-6">
                        <ul>
                            {/* <li>Precipitation: 0%</li> */}
                            <li>humidity :{weatherData.humidity}%</li>
                            <li>wind :{weatherData.wind}</li>
                        </ul>
                     </div>
            </div>
        </div>
      )
    } else{
    const apiKey = "3f6be1c407b0d9d1933561808db358ba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
    }
}