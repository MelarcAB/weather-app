import React, { useState, useRef, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { getCities } from '../api/api';

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const loadCities = async () => {
            try {
                if (inputValue.length > 2) {
                    const results = await getCities(inputValue);
                    console.log("API Results:", results);
                    setCities(results);
                } else {
                    setCities([]); // limpiar  resultados si hay 2 caracteres o menos
                }
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        const timeoutId = setTimeout(loadCities, 500);
        return () => clearTimeout(timeoutId);
    }, [inputValue]); 

    return (
        <div className="relative w-full max-w-md">
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                type="text"
                className="w-full pl-12 pr-4 py-2 rounded-lg shadow-md focus:outline-none focus:shadow-outline-blue bg-gray-100 text-gray-600 placeholder-gray-400"
                placeholder="Buscar..."
            />
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <SearchIcon style={{ color: 'gray' }} />
            </div>
            {cities.length > 0 && (
                <div className="absolute w-full mt-2 rounded-md shadow-lg bg-white z-10">
                    {cities.map(city => (
                        <div 
                            key={city.id} 
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={() => console.log(city.name)}
                        >
                            {city.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchInput;
