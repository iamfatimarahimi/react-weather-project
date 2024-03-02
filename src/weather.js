import React ,{useState} from "react";
// import {InfinitySpin} from 'react-loader-spinner'
import './weather.css'
import axios from "axios";

export default function Weather(){
    
    const {ready , setReady} = useState(false)
    const {temperature , setTemperature} = useState(null);
    function handleResponse(response){
        console.log(response.data)
        setTemperature(response.data.main.temp)
        setReady(true)
    }

    if (ready == true){
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
            <h1>New york</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly cloudly</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Mostly Cloudly"
                     /> 
                     <span className="temperature">{temperature}</span>
                     <span className="unit">°C</span>
                     </div>
                     <div className="col-6">
                        <ul>
                            <li>Precipitation: 0%</li>
                            <li>Humidity: 65%</li>
                            <li>Wind: 6 mph</li>
                        </ul>
                     </div>
            </div>
        </div>
      )
    } else{
    const apiKey = "3f6be1c407b0d9d1933561808db358ba";
    let city = "London"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
    }
}