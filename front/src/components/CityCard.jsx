import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const CityCard = ({ data }) => {
    const date = data[0].time.split('T')[0].split('-').reverse().join('/');
    const times = ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"];

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case "sun":
                return <WbSunnyIcon fontSize="large" style={{ color: '#FFA500' }} />;
            case "cloud":
                return <CloudIcon fontSize="large" style={{ color: '#555' }} />;
            case "rain":
                return <GrainIcon fontSize="large" style={{ color: '#4682B4' }} />;
            case "snow":
                return <GrainIcon fontSize="large" style={{ color: '#B0C4DE' }} />;
            default:
                return <WbSunnyIcon fontSize="large" style={{ color: '#FFA500' }} />;
        }
    }

    return (
        <div className="bg-white bg-opacity-40 w-60 sm:w-72 md:w-96 p-5 rounded-lg shadow-lg flex flex-col space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="text-center mb-4">
                <h1 className="text-2xl text-black font-semibold">{date}</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {data && data.map((detail, index) => (
                    <WeatherInfo key={index} time={times[index]} temp={detail.temperature} icon={getIconComponent(detail.icon)} />
                ))}
            </div>
        </div>
    )
}

const WeatherInfo = ({ time, temp, icon }) => (
    <div className="flex justify-between items-center text-black border-b border-gray-400 pb-2 hover:bg-opacity-70 hover:bg-gray-200 transition-all duration-300 rounded">
        <p>{time}</p>
        <div className="flex items-center space-x-2">
            <span>{icon}</span>
            <p className="font-medium">{temp} ºC</p>
        </div>
    </div>
);
