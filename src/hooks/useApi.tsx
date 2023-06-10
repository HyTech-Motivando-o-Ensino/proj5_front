import axios from 'axios';

const API_ENDPOINT = 'https://api.github.com';

const useAPI = () => {
    return axios.create({
        baseURL: API_ENDPOINT,
    })
}
export default useAPI;