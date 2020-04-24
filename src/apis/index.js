import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://chat.vatgia.vn'
});

export const apiGet = (url, params = {}) => {
    return Axios.get(url, {params})
        .then(response => response.data)
        .catch(error => {
            console.log(url + error);
            throw error;
        })
}

export const apiPost = (url, params = {}) => {
    return Axios.post(url, params).then(response => response.data).catch(error => {
        console.log(url + error);
        throw error;
    })
}

export const apiDelete = (url, params = {}) => {
    return Axios.delete(url, {params}).then(response => response.data).catch(error => {
        console.error(error);
        throw error;
    })
}

export const apiPut = (url, params = {}) => {
    return Axios.put(url, params)
        .then(response => response.data)
        .catch(error => {
            console.log(url + error);
            throw error;
        })
}
