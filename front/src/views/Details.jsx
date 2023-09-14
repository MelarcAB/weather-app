import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import { useParams } from "react-router-dom";
import { CityCard } from "../components/CityCard";
import { BigCityCard } from "../components/BigCityCard";
import { getCityDetails, getCities, getCityDetailsByName } from "../api/api";

function Details() {
    const { city } = useParams();
    const [cityDetails, setCityDetails] = useState({});
    useEffect(() => {
        const fetchCityDetails = async () => {
            const cityDetails = await getCityDetailsByName(city);
            const targetHours = ["00", "03", "06", "09", "12", "15", "18", "21"];
            console.log(cityDetails.hourly);
            const groupedData = cityDetails.hourly.time
                .map((time, index) => {
                    const hour = time.substring(11, 13);
                    if (targetHours.includes(hour)) {
                        //obtener el icono a mostrar en esta prioridad: 1. clear 2. partly cloudy 3. cloudy 4. rain 5. snow
                        let icon = "sun";
                        // si cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high son >= 1 entonces es cloudy
                        if (cityDetails.hourly.cloudcover[index] > 3 || cityDetails.hourly.cloudcover_low[index] > 3 || cityDetails.hourly.cloudcover_mid[index] >= 2 || cityDetails.hourly.cloudcover_high[index] > 1) {
                            icon = "cloud";
                        }
                        //rain o showers > 0 entonces es rain
                        if (cityDetails.hourly.rain[index] > 0 || cityDetails.hourly.showers[index] > 0) {
                            icon = "rain";
                        }
                        //snow > 0 entonces es snow
                        if (cityDetails.hourly.snowfall[index] > 0) {
                            icon = "snow";
                        }
                        return {
                            time: cityDetails.hourly.time[index],
                            temperature: cityDetails.hourly.temperature_2m[index],
                            icon: icon
                        };
                    }
                    return null;
                })
                .filter(item => item !== null);

                const todayDayNumber = new Date().getDay();

                // Agrupar los días en grupos de hoy, mañana, pasado mañana, el siguiente, etc.
                const getDayGroup = (date) => {
                    const dayNumber = date.getDay();
                    const difference = (dayNumber - todayDayNumber + 7) % 7; // Asegurarse de que la diferencia esté en el rango [0, 6]
                
                    if (difference === 0) return "hoy";
                    if (difference === 1) return "manana";
                    if (difference === 2) return "pasado";
                    if (difference === 3) return "siguiente";
                    if (difference === 4) return "siguiente2"; 
                    if (difference === 5) return "siguiente3"; 
                    if (difference === 6) return "siguiente4"; 
                    if (difference === 7) return "siguiente5"; 
                    if (difference === 8) return "siguiente6"; 
                    return null;
                };
                
                const days = {
                    hoy: [],
                    manana: [],
                    pasado: [],
                    siguiente: [],
                    siguiente2: [], 
                    siguiente3: [],  
                    siguiente4: [],  
                    siguiente5: [],  
                    siguiente6: [],  

                };
                
                groupedData.forEach(data => {
                    const group = getDayGroup(new Date(data.time));
                    if (group) days[group].push(data);
                });
                
                // Agrupamos en un solo array
                const array = [days.hoy, days.manana, days.pasado, days.siguiente, days.siguiente2, days.siguiente3, days.siguiente4,, days.siguiente5,, days.siguiente6];
                
                setCityDetails(array);
                
        };

        fetchCityDetails();
    }, [city]);

    return (
        <div className="container mx-auto px-4 ">
            <div className="mb-8 w-full flex justify-center pt-10">
                <SearchInput />
            </div>
            <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-white">{city}</h1>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col items-center mt-10 space-y-10">
                    {cityDetails && cityDetails.length > 0 && <BigCityCard data={cityDetails[0]} />}
                    <div className="w-full max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                            {cityDetails && cityDetails.length > 0 && <CityCard data={cityDetails[1]} />}
                            {cityDetails && cityDetails.length > 0 && <CityCard data={cityDetails[2]} />}
                            {cityDetails && cityDetails.length > 0 && <CityCard data={cityDetails[3]} />}
                            {cityDetails && cityDetails.length > 0 && <CityCard data={cityDetails[4]} />}
                            {cityDetails && cityDetails.length > 0 && <CityCard data={cityDetails[5]} />}
                            {cityDetails && cityDetails.length > 0 && <CityCard data={cityDetails[6]} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



}

export default Details;
