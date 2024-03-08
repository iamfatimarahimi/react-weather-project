import React from "react";
import FormatteDate from './FormatteDate'
export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
        <h1>{props.city}</h1>
            <ul>
                <li><FormatteDate date={props.date}/></li>
                <li className="text-capitalize">{props.desceription}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={props.iconUrl} alt="props.desceription"/> 
                     <span className="temperature"> {Math.round(props.temperature)}</span>
                     <span className="unit">°C</span>
                     </div>
                     <div className="col-6">
                        <ul>
                            {/* <li>Precipitation: 0%</li> */}
                            <li>humidity :{props.humidity}%</li>
                            <li>wind :{props.wind}</li>
                        </ul>
                     </div>
            </div>
            </div>
    )
}