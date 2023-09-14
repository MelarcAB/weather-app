import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const CityCard = ({ data }) => {
    //formatada a dd/mm/yyyy
    const date = data[0].time.split('T')[0].split('-').reverse().join('/');
    const getIconComponent = (iconName) => {
        switch (iconName) {
            case "sun":
                return <WbSunnyIcon fontSize="large" style={{ color: 'yellow' }} />;
            case "cloud":
                return <CloudIcon fontSize="large" style={{ color: 'gray' }} />;
            case "rain":
                return <GrainIcon fontSize="large" style={{ color: 'lightblue' }} />;
            case "snow":
                return <GrainIcon fontSize="large" style={{ color: 'white' }} />;
            default:
                return <WbSunnyIcon fontSize="large" style={{ color: 'yellow' }} />;
        }
    }
    
        return (
        <div className="bg-black bg-opacity-60 w-60 sm:w-72 md:w-96 p-5 rounded-lg shadow-lg flex flex-col space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="text-center mb-4">
                <h1 className="text-xl sm:text-2xl text-white font-semibold">{date}</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <WeatherInfo time="12 AM" temp={data[0].temperature} icon={getIconComponent(data[0].icon)} />
                <WeatherInfo time="3 AM"  temp={data[1].temperature} icon={getIconComponent(data[1].icon)} />
                <WeatherInfo time="6 AM"  temp={data[2].temperature} icon={getIconComponent(data[2].icon)} />
                <WeatherInfo time="9 AM"  temp={data[3].temperature} icon= {getIconComponent(data[3].icon)} />
                <WeatherInfo time="12 PM"  temp={data[4].temperature} icon= {getIconComponent(data[4].icon)} />
                <WeatherInfo time="3 PM"  temp={data[5].temperature} icon=  {getIconComponent(data[5].icon)} />
                <WeatherInfo time="6 PM"  temp={data[6].temperature} icon= {getIconComponent(data[6].icon)} />
                <WeatherInfo time="9 PM"  temp={data[7].temperature} icon=  {getIconComponent(data[7].icon)} />
            </div>
        </div>
    )
}

const WeatherInfo = ({ time, temp, icon }) => (
    <div className="flex justify-between items-center text-white border-b border-gray-600 pb-2 hover:bg-opacity-70 hover:bg-black transition-all duration-300 rounded">
        <p>{time}</p>
        <div className="flex items-center space-x-2">
            <span>{icon}</span>
            <p className="font-medium">{temp}</p>
        </div>
    </div>
);
