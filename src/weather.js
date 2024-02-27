import React from "react";
// import axios from "axios";
// import {InfinitySpin} from 'react-loader-spinner'
import './weather.css'

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="search for city.." className="form-control"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
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
                     <div className="col-6">
                        <ul>
                            <li>Precipitation: 0%</li>
                            <li>Humidity: 65%</li>
                            <li>Wind: 6 mph</li>
                        </ul>
                     </div>
                </div>
            </div>
            </div>
    )
}