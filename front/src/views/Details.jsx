import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import { useParams } from "react-router-dom";
import { CityCard } from "../components/CityCard";
import { BigCityCard } from "../components/BigCityCard";
import { getCityDetails, getCities } from "../api/api";

//useState and useEffect
// import { useState, useEffect } from "react";
//useState sirve para crear variables de estado que se pueden modificar
// useEffect sirve para ejecutar codigo cuando se renderiza el componente
function Details() {
    const { city } = useParams();
    const [cityDetails, setCityDetails] = useState({});
    const [cityData, setCityData] = useState({});//[{},{}
    useEffect(() => {
        const fetchCityDetails = async () => {
            const cityDetails = await getCities(city);
            setCityDetails(cityDetails[0]);
        }
        fetchCityDetails();
    }, [city]);

    useEffect(() => {
        const fetchCityDetails = async () => {
            const cityData = await getCityDetails(cityDetails.latitude, cityDetails.longitude);
            setCityData(cityData);
        }
        fetchCityDetails();
    }, [cityDetails]);


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
                    <BigCityCard />
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
