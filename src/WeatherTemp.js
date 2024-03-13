import React , {useState} from "react";

export default function WeatherTemp(props){
    const [unit , setUnit]= useState("celsius")
    function converToFarenheit(event){
        event.preventDefault();
        setUnit("Farenheit")
    }
    function converToCelsius(event){
        event.preventDefault();
        setUnit("Celsius");
    }
    function farenheit(){
        return ( props.celsius* 9) /5 + 32;
    }
    if (unit === "celsius"){
        return(
            <div className="WeatherTempe">
            <span className="temperature"> {Math.round(props.celsius)}</span>
            <span className="unit">°C |{" "}
            <a href="/" onClick={converToFarenheit}>°F</a>
             </span>
            </div>
        )

    } else{
        return(
            <div className="WeatherTempe">
            <span className="temperature"> {Math.round(farenheit())}</span>
            <span className="unit"> 
            <a href="/" onClick={converToCelsius}>°C</a>{" "}
            | °F</span>
            </div>
        )
    }

}