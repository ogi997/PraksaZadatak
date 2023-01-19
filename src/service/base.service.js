import axios from 'axios';

const baseConfig = {
    baseURL: 'http://localhost:3001',
};


export default {
    service: () => {
        const instance = axios.create(baseConfig);
        instance.defaults.headers.common['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';
        return instance;
    }
};