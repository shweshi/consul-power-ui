import axios from "axios";

const client = axios.create({
    baseURL: `http://localhost:3001/v1/`,
});

client.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
    }
    return config;
});

client.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})

export default client;