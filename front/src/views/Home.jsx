import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import  SearchInput  from '../components/SearchInput';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 flex flex-col items-center justify-center p-5">
            {/* Encabezado */}
            <div className="mb-10 text-center">
                <img src="/icon.webp" alt="App Logo" className="w-24 h-24 mx-auto mb-4"/>
                <h1 className="text-4xl text-white font-bold mb-2">El Tiempo</h1>
                <p className="text-xl text-white opacity-70">Consulta el clima de cualquier ciudad</p>
            </div>

            {/* Input de búsqueda */}
            <div className="w-full max-w-lg">
                <SearchInput />
            </div>

            {/* Pie de página (opcional) */}
            <div className="mt-10 text-center">
                <p className="text-white opacity-70">Desarrollado por Marc Ariño Barceló</p>
            </div>
        </div>
    );
}

export default Home;
