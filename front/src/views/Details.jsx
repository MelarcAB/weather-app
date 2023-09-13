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
            const groupedData = cityDetails.hourly.time
                .map((time, index) => {
                    const hour = time.substring(11, 13);
                    if (targetHours.includes(hour)) {
                        return {
                            time: cityDetails.hourly.time[index],
                            temperature: cityDetails.hourly.temperature_2m[index]
                        };
                    }
                    return null;
                })
                .filter(item => item !== null);
        
            const todayDayNumber = new Date().getDay();
            //agrupar los dias en grupos de hoy,mañna,pasado
            const getDayGroup = (date) => {
                const dayDifference = (date.getDay() - todayDayNumber + 7) % 7;
                if (dayDifference === 0) return 'hoy';
                if (dayDifference === 1) return 'manana';
                if (dayDifference === 2) return 'pasado';
                return null;
            };
            const days = {
                hoy: [],
                manana: [],
                pasado: []
            };
            groupedData.forEach(data => {
                const group = getDayGroup(new Date(data.time));
                if (group) days[group].push(data);
            });
        
            // Agrupamos en un solo array
            const array = [days.hoy, days.manana, days.pasado];
            console.log(array);
        
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
                    <BigCityCard data={cityDetails[0]} />
                    <div className="w-full max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                            <CityCard />
                            <CityCard />
                            <CityCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Details;
