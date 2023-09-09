require('dotenv').config();
const express = require('express');
const axios = require('axios');

const router = express.Router();



router.get('/current', async (req, res) => {
    try {
        const { query } = req.query;
        const response = await axios.get(`http://api.weatherstack.com/current`, {
            params: {
                access_key: API_KEY,
                query,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching current weather data' });
    }
});

router.get('/historical', async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m`, {
            params: {
                longitude: longitude,
                latitude: latitude,
                hourly: "temperature_2m",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching historical weather data' });
    }
});

router.get('/coordinates', async (req, res) => {
    try {
        const { query } = req.query;
        const url = "https://geocoding-api.open-meteo.com/v1/search";
        const params = {
            format: "json",
            name: query,
            count : 1,
            languaje: "en",
        };

        const fullUrl = `${url}?${new URLSearchParams(params)}`;
        const response = await axios.get(fullUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/cities",async (req,res)=>{
    try {
        const city = req.query.city;
        const url = "https://geocoding-api.open-meteo.com/v1/search";
        const params = {
            format: "json",
            name: city,
            count : 10,
            languaje: "en",
        };

        const fullUrl = `${url}?${new URLSearchParams(params)}`;
        const response = await axios.get(fullUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
