import React from "react";
import FormatteDate from './FormatteDate'
import WeatherIcon from "./weatherIcon"
import WeatherTemp from "./weatherTemp"
export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
        <h1>{props.data.city}</h1>
            <ul>
                <li><FormatteDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="float-left">
                    <WeatherIcon code={props.data.icon}/>
                    </div>
                    <div className="float-left">
                    <WeatherTemp celsius={props.data.temperature}/>
                    </div>
                     
                     </div>
                     <div className="col-6">
                        <ul>

                            <li>humidity :{props.data.humidity}%</li>
                            <li>wind :{props.data.wind}</li>
                        </ul>
                     </div>
            </div>
            </div>
    )
}