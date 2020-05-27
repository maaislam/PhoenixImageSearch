


import axios from 'axios'


const unsplash = axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID mc1gEhNVyJLViQ23AtEjov7J3UchI9FqZEZLP5GhX9A'
    }


});

export default unsplash;