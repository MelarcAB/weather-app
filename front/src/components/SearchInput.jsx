import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
export const SearchInput = ({ value, onChange }) => {
    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-2 rounded-lg shadow-md focus:outline-none focus:shadow-outline-blue bg-gray-100 text-gray-600 placeholder-gray-400"
                placeholder="Buscar..."
            />
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <SearchIcon style={{ color: 'gray' }} />
            </div>
        </div>
    );
}
