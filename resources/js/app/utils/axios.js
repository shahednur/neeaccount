import axios from 'axios';

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const request = ({ ...options }) => {
    // client.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    client.defaults.headers.common.Authorization = `Bearer token`;

    const onSuccess = (response) => response;
    const onError = (error) => {
        return error
    };

    return client(options).then(onSuccess).catch(onError);
};