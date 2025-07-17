import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState} from "react";
import React from 'react';


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({ 
        city: "Uttarakhand ",
        feels_like: 24.89,
        temp: 14.98,
        tempMin: 23.89,
        tempMax: 23.89,
        humidity: 67,
        weather: "cold",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{ textAlign: "center"
        }}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
  );
}
