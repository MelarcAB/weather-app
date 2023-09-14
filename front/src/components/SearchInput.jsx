import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { getCities } from '../api/api';
import { Link } from 'react-router-dom';

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const loadCities = async () => {
            try {
                if (inputValue.length > 2) {
                    const results = await getCities(inputValue);
                    setCities(results);
                } else {
                    setCities([]); // limpiar resultados si hay 2 caracteres o menos
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
                className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-outline-blue bg-gray-100 text-gray-600 placeholder-gray-400 transition duration-300 ease-in-out"
                placeholder="Buscar..."
            />
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <SearchIcon style={{ color: 'gray' }} />
            </div>
            {cities.length > 0 && (
                <div className="absolute w-full mt-2 rounded-md shadow-lg bg-white z-10">
                    {cities.map(city => (
                        <Link to={`/city/${city.name}`} key={city.id}>
                            <div 
                                className="cursor-pointer p-2 hover:bg-gray-300 hover:text-gray-700 transition duration-200 ease-in-out"
                                onClick={() => {
                                    console.log(city.name);
                                    setCities([]); // cerrar desplegable
                                }}
                            >

                                {city.name}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchInput;
