import axios from 'axios';

export async function axiosRequest (endpoint: string, method: string, data?: any) {
    axios({
        method: method,
        url: 'http://localhost:9000/'+ endpoint,
        data: data
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}