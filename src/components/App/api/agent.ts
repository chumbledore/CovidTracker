import { CovidAPIData } from '../viewmodels/CovidAPIData';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.covid19api.com/';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody)
}

const CovidInfo = {
    list: () => requests.get<CovidAPIData>('/summary'),
}

const agent = {
    CovidInfo
}

export default agent;