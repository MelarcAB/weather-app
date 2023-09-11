import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';

export const BigCityCard = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="bg-black bg-opacity-60 w-full sm:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-5/8 p-6 mx-auto mt-10 rounded-lg shadow-lg flex flex-col items-center space-y-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="text-center">
            <p className="text-white text-xl font-light mb-1">{currentDate}</p>
            <span className="text-white text-sm opacity-70">Hoy</span>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8 w-full">
                <WeatherInfo time="12 AM" temp="18°C" icon={<WbSunnyIcon fontSize="large" style={{ color: 'yellow' }} />} />
                <WeatherInfo time="3 AM" temp="16°C" icon={<CloudIcon fontSize="large" style={{ color: 'gray' }} />} />
                <WeatherInfo time="6 AM" temp="15°C" icon={<GrainIcon fontSize="large" style={{ color: 'lightblue' }} />} />
                <WeatherInfo time="9 AM" temp="17°C" icon={<CloudIcon fontSize="large" style={{ color: 'gray' }} />} />
                <WeatherInfo time="12 PM" temp="20°C" icon={<WbSunnyIcon fontSize="large" style={{ color: 'yellow' }} />} />
                <WeatherInfo time="3 PM" temp="22°C" icon={<WbSunnyIcon fontSize="large" style={{ color: 'yellow' }} />} />
                <WeatherInfo time="6 PM" temp="21°C" icon={<CloudIcon fontSize="large" style={{ color: 'gray' }} />} />
                <WeatherInfo time="9 PM" temp="19°C" icon={<GrainIcon fontSize="large" style={{ color: 'lightblue' }} />} />
            </div>
        </div>
    )
}

const WeatherInfo = ({ time, temp, icon }) => (
    <div className="flex flex-col justify-center items-center text-white p-3 rounded hover:bg-opacity-70 hover:bg-black transition-all duration-300">
        <div className="mb-2">{icon}</div>
        <p className="text-xs opacity-70">{time}</p>
        <p className="font-bold">{temp}</p>
    </div>
);
