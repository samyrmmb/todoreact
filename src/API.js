import axios from "axios";

const getTodos = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
};

const getWeatherInfo = async (q) => {
    return await axios.get(`http://api.weatherstack.com/current?access_key=3867615ab641704edb0537c028b871ff&query=${q}`)
}

export {
    getTodos,
    getWeatherInfo
};
