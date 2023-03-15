import axios from 'axios';
const PEXEL_KEY = `563492ad6f917000010000010f378e522b0a4d7781692136b78222d1`;

export default axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': "GET, PUT, POST"
    },
    baseURL:'https://api.pexels.com/videos',
    params:{
        Authorization:PEXEL_KEY
    }

})
