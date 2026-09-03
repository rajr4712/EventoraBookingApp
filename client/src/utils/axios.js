// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:5000/api',
// });

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export default api;




//after deploy your code on render this code write ciz 5000 is hardcode and it only work on local not in render --
import axios from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
