import WeatherIcon from './WeatherIcons'
import './Forecast.css'
import { Axios } from 'axios'
export default function WeatherForecast(){
    function handleResponse(response){
        console.log(response.data)
    }
    let apiKey= `17ad6e67aa629189f73b053634668b20`
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}`
    Axios.get(apiUrl).then(handleResponse);
    return(
        <div className="weatherForecast">
            <div className="row">
            <div className="col">
                <div className='foreacast-day'>Thue</div>
                <WeatherIcon code="01d" size={36}/>
                <div className='forecast-temp'>
                    <span className='forecast-temp-max'>19</span>
                    <span className='forecast-temp-min'>10</span>
                </div>
            </div>
            </div>
        </div>
    )
}