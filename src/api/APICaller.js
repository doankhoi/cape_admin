import axios from 'axios';
import * as Config from './Config';

const callApi = (endpoint, method='GET', data=null, params=null, headers=null) => {
    return axios({
        baseURL: Config.API_BASE_URL,
        url: endpoint,
        method: method,
        data: data,
        headers: headers,
        params: params
    }).catch((err) => {
        console.log("Request API error: ");
        console.log(err);
    });
}

export default callApi;
