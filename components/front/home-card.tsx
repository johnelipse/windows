/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { CloudSun } from "lucide-react";
import React, { useState } from "react";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 31,
    weatherIcon: CloudSun,
    weatherDescription: "Heavy rain",
    windSpeed: 34,
    windDirection: 24,
  });

  return (
    <div className="bg-black/15 backdrop-blur-md text-white rounded-lg shadow-lg py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">{weatherData.temperature}°F</div>
        <weatherData.weatherIcon className="w-8 h-8" />
      </div>
      <div className="text-lg font-medium">
        {weatherData.weatherDescription}
      </div>
      <div className="text-gray-400">
        Wind: {weatherData.windSpeed} mph, {weatherData.windDirection}°
      </div>
    </div>
  );
};

export default WeatherCard;
