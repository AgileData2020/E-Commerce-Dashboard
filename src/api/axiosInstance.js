// axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Set your API base URL
    timeout: 10000, // Set the timeout for requests (in milliseconds)
    headers: {
        'Content-Type': 'application/json', // Set default content type for all requests
    },
});

export default axiosInstance;
