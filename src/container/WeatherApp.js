import { Component } from "react";
import { getWeatherInfo } from "../API";
import Toast from "../components/Toast";

export default class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weather: {}
        }
    }

    handleChangeInput = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    searchApi = async () => {
        const { city } = this.state;
        const { data } = await getWeatherInfo(city);
        this.setState({ weather: data });
        console.log("consulta", data );
    }

    render() {
        const { city, weather } = this.state;
        return (
            <div>
                <input type="text" name="city" placeholder="Entre com o nome da cidade" onChange={this.handleChangeInput} value={city} />
                <button type="button" onClick={this.searchApi} >Search</button>
                <hr />
                <Toast message="Toast Example" delay="3000" />
                {weather && weather.current && weather.location ?
                    <div className="weather-info">
                        <h1>{weather.location.name}</h1>
                        <img src={weather.current.weather_icons} alt="" />
                        <h4>Tempo: {weather.current.weather_descriptions}</h4>
                        <h4>Temperatura: {weather.current.temperature}°C</h4>
                    </div>
                    : <p>Not yet</p>
                }
            </div>
        );
    }

}