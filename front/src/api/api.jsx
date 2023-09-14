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

const getCityDetailsByName = async (city) => {
    //primero se obtiene latitud y longitud
    const cities = await getCities(city);
    const lat = cities[0].latitude;
    const long = cities[0].longitude;
    //se obtiene el historico
    const cityDetails = await getCityDetails(lat, long);
    return cityDetails;


}


const getCityDetails = async (lat,long) => {
    try {
        
        //validar si son null
        if(lat==null || long==null){
            return [];
        }
        const url = `${BACKEND_URL}/historical?latitude=${lat}&longitude=${long}`;
        const cityDetails = axios.get(url)
            .then((response) => {
                return response.data;
            }
            );
        return cityDetails;

    } catch (e) {
      //  console.error(e);
        return [];
    }

}

export { getCities, getCityDetails,getCityDetailsByName };