import axios from 'axios';

const API_ENDPOINT = 'http://157.230.1.221:8000';

const useAPI = () => {
    return axios.create({
        baseURL: API_ENDPOINT,
    })
}
export default useAPI;