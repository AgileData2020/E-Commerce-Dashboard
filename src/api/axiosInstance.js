// axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Set your API base URL
    timeout: 10000, // Set the timeout for requests (in milliseconds)

    headers: {
        // Replace this with your actual token
        'Content-Type': 'multipart/form-data',
    },
});

export default axiosInstance;
