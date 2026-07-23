import "./WeatherWidget.css";

import { useEffect, useState } from "react";

type Weather = {
    city: string;
    temperature: string;
    condition: string;
    humidity: string;
    wind: string;
};

function WeatherWidget() {

    const [weather] = useState<Weather | null>(null);

    useEffect(() => {

        // TODO: Fetch weather from backend/API
        // Example:
        // const data = await getWeather();
        // setWeather(data);

    }, []);

    if (!weather) {

        return (

            <div className="weather-widget">

                <h2>Weather</h2>

                <div className="weather-card">

                    <p>No Weather Data Available</p>

                </div>

            </div>

        );

    }

    return (

        <div className="weather-widget">

            <h2>Weather</h2>

            <div className="weather-card">

                <h1>{weather.temperature}</h1>

                <h3>{weather.condition}</h3>

                <p>{weather.city}</p>

                <div className="weather-info">

                    <div>

                        <strong>Humidity</strong>

                        <span>{weather.humidity}</span>

                    </div>

                    <div>

                        <strong>Wind</strong>

                        <span>{weather.wind}</span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default WeatherWidget;