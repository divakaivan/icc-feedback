import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://icc-feedback.firebaseio.com/icc-feedback'
});

export default instance;