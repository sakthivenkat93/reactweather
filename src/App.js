import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import FiveDayForecastUnit from './fiveDayForecastUnit';
import axios from 'axios';

const baseAPIURL = 'https://api.openweathermap.org/data/2.5/forecast?';
const apiKey = 'ebfbe6a4de4e5b57a1a899b33f678824';

class App extends React.Component {
	constructor(props){
		super(props);
		//axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=ebfbe6a4de4e5b57a1a899b33f678824').then((response) => this.state = response.data);
		this.state = {
			weatherData: {
				city: {
					name: ''
				},
			},
			units: 'metric'
		}
	}
	async componentDidMount(){
		let location;
		function getCoordinates() {
			return new Promise(function(resolve, reject) {
			  navigator.geolocation.getCurrentPosition(resolve, reject);
			});
		}
		location = await getCoordinates();
		let completeURL = `${baseAPIURL}lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}&units=metric`;
		axios.get(completeURL).then((response) => this.renderWeatherData(response.data));
	}
	renderWeatherData(data){
		this.setState({
			weatherData: data
		});
		console.log(this.state);
	}
	degToCompass(num) {
		var val = Math.floor((num / 22.5) + 0.5);
		var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
		return arr[(val % 16)];
	}
	render() {
		return (
			<div className="App">
				<div className="AppHeader">
					<Navbar bg="dark" expand="lg" variant="dark">
						<Navbar.Brand href="#home">Weather</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
							</Nav>
							<Form inline>
								<FormControl type="text" placeholder="Location" className="mr-sm-2" />
								<Button variant="outline-light">Search</Button>
							</Form>
						</Navbar.Collapse>
					</Navbar>
				</div>
				<div className="currentInfo">
					<div className="currentLocation">
						{this.state.weatherData.city.name}
				</div>
					<div className="currentTemperature">
						<div className="currentTemperatureValue">
							{this.state.weatherData.list ? this.state.weatherData.list[0].main.temp : 'Temperature'}
					</div>
						{this.state.units === 'metric' && <div className="currentTemperatureUnit">	&#8451;</div>}
						{this.state.units === 'imperial' && <div className="currentTemperatureUnit">	&#8457;</div>}
					</div>
					<div className="currentCondition">
						{this.state.weatherData.list ? `${this.state.weatherData.list[0].weather[0].main} - ${this.state.weatherData.list[0].weather[0].description}` : '0'}
					</div>
					<div className="lastTimestampContainer">
						Last Updated at: <span className="lastTimestamp">16:15</span>
					</div>
					<div className="currentStatContainer">
						<div className="feelsLike">
							Feels Like <span>
							{this.state.weatherData.list ? this.state.weatherData.list[0].main.feels_like : 'Temperature'}
							{this.state.units === 'metric' && <span className="">	&#8451;</span>}
							{this.state.units === 'imperial' && <span className="">	&#8457;</span>}
							</span>
						</div>
						<div className="wind">
							Wind {this.state.weatherData.list ? this.state.weatherData.list[0].wind.speed : '0'}
							<span>{this.state.units === 'metric' && 'm/s'}{this.state.units === 'imperial' && 'mph'} {this.degToCompass(45)}</span>
						</div>
						<div className="visibility">
							Visibility <span>
							{this.state.units === 'metric' && (this.state.weatherData.list ? this.state.weatherData.list[0].visibility : '0')/1000 + ' kilometers'}
							{this.state.units === 'imperial' && (this.state.weatherData.list ? this.state.weatherData.list[0].visibility : '0')/1600 + ' miles'}
							</span>
						</div>
					</div>
					<div className="currentStatContainer">
						<div className="barometer">
							Barometer <span>{this.state.weatherData.list ? this.state.weatherData.list[0].main.pressure : 'Pressure'}mb</span>
						</div>
						<div className="humidity">
							Humidity <span>90%</span>
						</div>
					</div>
					<div className="fiveDayForecastHeader">
						Five Day Forecast
				</div>
					<div className="fiveDayForecastContainer">
						{/* {this.state.map(number => this.renderForecastDays(number))} */}
						{/* {this.state.weatherData} */}
					</div>
				</div>
			</div>
		);
	}
	renderForecastDays(day) {
		return <FiveDayForecastUnit value={day}/>;
	}
}

export default App;
