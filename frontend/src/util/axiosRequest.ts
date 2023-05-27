import axios from 'axios';
export const axiosRequest = async (endpoint: string, method: string, body?: any) => {
    const response = await axios({
        method: method,
        url: 'http://localhost:9000/' + endpoint,
        data: body
    });
    console.log(response);

    const data = await response.data;
    const status = response.status;

    return { response: response, data: data, status: status };
}