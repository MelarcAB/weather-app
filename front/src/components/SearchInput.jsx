import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { getCities } from '../api/api';
import { Link } from 'react-router-dom';

const DEBOUNCE_TIME = 500;

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [cities, setCities] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const loadCities = async () => {
        if (inputValue.length > 2) {
            try {
                const results = await getCities(inputValue);
                setCities(results);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        } else {
            setCities([]); // limpiar resultados si hay 2 caracteres o menos
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(loadCities, DEBOUNCE_TIME);
        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    return (
        <div className="relative w-full max-w-md">
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onFocus={() => {
                    setIsFocused(true);
                    setIsMenuVisible(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                    setTimeout(() => {
                        setIsMenuVisible(false);
                    }, 150);
                }}
                type="text"
                className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-outline-blue bg-gray-100 text-gray-600 placeholder-gray-400 transition duration-300 ease-in-out"
                placeholder="Buscar..."
            />
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <SearchIcon style={{ color: 'gray' }} />
            </div>
            {inputValue.length > 2 && isMenuVisible && (
                <div className="absolute w-full mt-2 rounded-md shadow-lg bg-white z-10">
                    {cities.length > 0 ? (
                        cities.map(city => (
                            <Link to={`/city/${city.name}`} key={city.id}>
                                <div 
                                    className="cursor-pointer p-2 hover:bg-gray-300 hover:text-gray-700 transition duration-200 ease-in-out"
                                    onClick={() => {
                                        setInputValue(''); // limpiar input
                                        setCities([]); // cerrar desplegable
                                    }}
                                >
                                    {city.name}
                                    <span className="text-gray-400 ml-2">
                                      ({city.country} - {city.admin1})
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="p-2 text-gray-600">
                            No se encontraron resultados.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchInput;
