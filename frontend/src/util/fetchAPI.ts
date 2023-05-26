export const fetchAPI = async (endpoint: string, method: string, body?: any) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Accept', '*/*');

    const myInit: RequestInit = {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(body)
    }
    const response = await fetch('http://localhost:9000/' + endpoint, myInit);
    const data = await response.json();

    console.log(response)

    return {response: response, data: data};
}