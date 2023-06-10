import axios from 'axios';

const API_ENDPOINT = 'https://run.mocky.io/v3/';

const useAPI = () => {
    return axios.create({
        baseURL: API_ENDPOINT,
    })
}
export default useAPI;