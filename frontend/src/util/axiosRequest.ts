import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

export const axiosRequest = async (endpoint: string, method: string, body?: any, token?: any) => {

    try {
        const headers = new AxiosHeaders();
        headers.setContentType('application/json; charset=utf-8');
        headers.setAccept('*/*');
        if (token) {
            headers.setAuthorization('Bearer ' + token);
        }

        const config: AxiosRequestConfig = {
            method: method,
            url: 'http://localhost:9000/' + endpoint,
            data: body,
            headers: headers
        }

        const response = await axios(config);
        console.log(response);

        const data = await response.data;
        const status = response.status;

        return { response: response, data: data, status: status };

    } catch (error: any) {
        console.log(error);

        return { error: error, code: error.code };
    }

}