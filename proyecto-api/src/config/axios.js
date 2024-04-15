import axios from 'axios';

const ClienteAxios =  axios.create({
    baseURL : 'http://localhost:5000'
});

export default ClienteAxios;