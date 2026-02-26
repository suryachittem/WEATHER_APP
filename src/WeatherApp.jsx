import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import './App.css';
export default function WeatherApp()
{
    let [weatherInfo,setweatherInfo]=useState({
        city:"delhi",
        temp:25.05,
        humidity:47,
        min_temp:25.05,
        max_temp:25.05,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div className="weather-bg">
            <h1 className="title">Weather App </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}