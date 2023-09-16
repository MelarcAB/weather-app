import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';

export const BigCityCard = ({ data }) => {
    const currentDate = new Date().toLocaleDateString();

    const getWeatherIcon = (iconType) => {
        switch (iconType) {
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
        <div className="bg-white bg-opacity-40 rounded-lg shadow-lg w-full sm:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-5/8 p-6 mx-auto mt-10 transition-transform transform hover:scale-105">
            <div className="text-center mb-6">
                <p className="text-gray-800 text-2xl font-semibold mb-2">{currentDate}</p>
                <span className="text-gray-600 text-lg">Hoy</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 w-full">
                {data.map((weatherData, index) => (
                    <WeatherInfo 
                        key={index}
                        time={`${(index * 3) % 24} ${index === 0 || index === 4 ? 'PM' : 'AM'}`}
                        temp={weatherData.temperature}
                        icon={getWeatherIcon(weatherData.icon)}
                    />
                ))}
            </div>
        </div>
    )
}

const WeatherInfo = ({ time, temp, icon }) => (
    <div className="flex flex-col justify-center items-center text-gray-700 p-3 hover:bg-gray-200 hover:bg-opacity-50 transition-all duration-300 rounded">
        <div className="mb-2">{icon}</div>
        <p className="text-sm font-medium">{time}</p>
        <p className="text-lg font-bold">{temp} ºC</p>
    </div>
);
