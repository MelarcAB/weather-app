const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import axios from 'axios';
const getCities = async (q) => {
    try {
        const cities = axios.get(`${BACKEND_URL}/cities?city=${q}`)
            .then((response) => {
                return response.data.results;
            }
            );
        return cities;

    } catch (e) {
        console.error(e);
        return [];
    }

};

const getCityDetails = async (lat,long) => {
    try {
        const url = `${BACKEND_URL}/historical?lat=${lat}&long=${long}`;
        const cityDetails = axios.get(url)
            .then((response) => {
                return response.data;
            }
            );
        return cityDetails;

    } catch (e) {
        console.error(e);
        return [];
    }

}

export { getCities, getCityDetails };