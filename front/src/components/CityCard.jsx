import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export const CityCard = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="bg-black bg-opacity-60 w-60 sm:w-72 md:w-96 p-5 rounded-lg shadow-lg flex flex-col space-y-4">
            <div className="text-center">
                <h1 className="text-xl sm:text-2xl text-white font-semibold">Barcelona</h1>
                <p className="text-white">{currentDate}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <WeatherInfo time="12 AM" temp="18°C" icon={<WbSunnyIcon />} />
                <WeatherInfo time="3 AM" temp="16°C" icon={<CloudIcon />} />
                <WeatherInfo time="6 AM" temp="15°C" icon={<GrainIcon />} />
                <WeatherInfo time="9 AM" temp="17°C" icon={<CloudIcon />} />
                <WeatherInfo time="12 PM" temp="20°C" icon={<WbSunnyIcon />} />
                <WeatherInfo time="3 PM" temp="22°C" icon={<WbSunnyIcon />} />
                <WeatherInfo time="6 PM" temp="21°C" icon={<CloudIcon />} />
                <WeatherInfo time="9 PM" temp="19°C" icon={<GrainIcon />} />
            </div>
        </div>
    )
}

const WeatherInfo = ({ time, temp, icon }) => (
    <div className="flex justify-between items-center text-white border-b border-gray-600 pb-2">
        <p>{time}</p>
        <div className="flex items-center space-x-2">
            <span>{icon}</span>
            <p>{temp}</p>
        </div>
    </div>
);
