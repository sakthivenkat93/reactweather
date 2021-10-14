import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import FiveDayForecastUnit from './fiveDayForecastUnit';

let sampleData = [
	{
		day: "Tue 17",
		hign: "28°",
		low: "26°",
		condition: "Torrential Rainfall"
	},
	{
		day: "Tue 18",
		hign: "28°",
		low: "26°",
		condition: "Light Rain"
	},
	{
		day: "Tue 19",
		hign: "28°",
		low: "26°",
		condition: "Cloudy"
	},
	{
		day: "Tue 20",
		hign: "28°",
		low: "26°",
		condition: "Partly Cloudy"
	},
	{
		day: "Tue 21",
		hign: "28°",
		low: "26°",
		condition: "Sunny"
	}
];

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = sampleData;
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
						Chennai, India
				</div>
					<div className="currentTemperature">
						<div className="currentTemperatureValue">
							26
					</div>
						<div className="currentTemperatureUnit">
							&#8451;
					</div>
					</div>
					<div className="currentCondition">
						Light Drizzle
				</div>
					<div className="lastTimestampContainer">
						Last Updated at: <span className="lastTimestamp">16:15</span>
					</div>
					<div className="currentStatContainer">
						<div className="feelsLike">
							Feels Like <span className="">28&#8451;</span>
						</div>
						<div className="wind">
							Wind <span className="">0mph N</span>
						</div>
						<div className="visibility">
							Visibility <span className="">3km</span>
						</div>
					</div>
					<div className="currentStatContainer">
						<div className="barometer">
							Barometer <span className="">1000mb</span>
						</div>
						<div className="humidity">
							Humidity <span className="">90%</span>
						</div>
					</div>
					<div className="fiveDayForecastHeader">
						Five Day Forecast
				</div>
					<div className="fiveDayForecastContainer">
						{/* <div className="fiveDayForecastUnit">
							<div className="forecastDay">Tue 17</div>
							<div className="forecast">
								<img className="forecastIcon" src="weather/034-moon.svg"></img>
							</div>
							<div className="forecastHigh">28&#176;</div>
							<div className="forecastLow">26&#176;</div>
							<div className="forecastCondition">Torrential Rainfall</div>
						</div>
						<div className="fiveDayForecastUnit">
							<div className="forecastDay">Tue 17</div>
							<div className="forecast">
								<img className="forecastIcon" src="weather/034-moon.svg"></img>
							</div>
							<div className="forecastHigh">28&#176;</div>
							<div className="forecastLow">26&#176;</div>
							<div className="forecastCondition">Torrential Rainfall</div>
						</div>
						<div className="fiveDayForecastUnit">
							<div className="forecastDay">Tue 17</div>
							<div className="forecast">
								<img className="forecastIcon" src="weather/034-moon.svg"></img>
							</div>
							<div className="forecastHigh">28&#176;</div>
							<div className="forecastLow">26&#176;</div>
							<div className="forecastCondition">Torrential Rainfall</div>
						</div>
						<div className="fiveDayForecastUnit">
							<div className="forecastDay">Tue 17</div>
							<div className="forecast">
								<img className="forecastIcon" src="weather/034-moon.svg"></img>
							</div>
							<div className="forecastHigh">28&#176;</div>
							<div className="forecastLow">26&#176;</div>
							<div className="forecastCondition">Torrential Rainfall</div>
						</div>
						<div className="fiveDayForecastUnit">
							<div className="forecastDay">Tue 17</div>
							<div className="forecast">
								<img className="forecastIcon" src="weather/034-moon.svg"></img>
							</div>
							<div className="forecastHigh">28&#176;</div>
							<div className="forecastLow">26&#176;</div>
							<div className="forecastCondition">Torrential Rainfall</div>
						</div> */}
						{this.state.map(number => this.renderForecastDays(number))}
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
