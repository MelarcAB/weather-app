const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import axios from 'axios';
const getCities = async (q) => {
   try{ 
    const cities = axios.get(`${BACKEND_URL}/cities?city=${q}`)
   .then((response) => {
    console.log(response.data);
       return response.data.results;
   }
);
return cities;

   }catch (e) {
       console.error(e);
       return [];
   }

};

export { getCities };