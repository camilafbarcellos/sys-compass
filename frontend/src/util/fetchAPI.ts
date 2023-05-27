export const fetchAPI = async (endpoint: string, method: string, token?: string) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Accept', '*/*');
    if(token) {
        myHeaders.append('Authorization', 'Bearer ' + token);
    }

    const myInit: RequestInit = {
        method: method,
        headers: myHeaders
    }
    const response = await fetch('http://localhost:9000/' + endpoint, myInit);
    const data = await response.json();
    const ok = response.ok;

    console.log(response)

    return {response: response, data: data, ok: ok};
}