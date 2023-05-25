export const fetchData = async (endpoint: string) => {
    const response = await fetch('http://localhost:9000/' + endpoint);
    const data = await response.json();

    return data;
}