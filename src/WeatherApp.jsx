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
        <div style={{ textAlign: "center", 
            backgroundImage: 'url(https://th.bing.com/th/id/R.069cf185a7daba4caceb8e10e84da46b?rik=H6UDZfO%2b56isFg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fDownload-Free-Weather-Background.jpg&ehk=JNt8y9ofXKAnT7OCpITBYQSnexCUjI9Hmcb24SZmQrs%3d&risl=&pid=ImgRaw&r=0)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position:'fixed',
            top:0,
            left: 0,
            height: '100vh',
            width: '100vw'
        }}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
  );
}