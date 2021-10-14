import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';

class FiveDayForecastUnit extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div className="fiveDayForecastUnit">
                <div className="forecastDay">{this.state.value.day}</div>
                <div className="forecast">
                    <img className="forecastIcon" src="weather/034-moon.svg"></img>
                </div>
                <div className="forecastHigh">{this.state.value.hign}</div>
                <div className="forecastLow">{this.state.value.low}</div>
                <div className="forecastCondition">{this.state.value.condition}</div>
            </div>
        );
    }
}

export default FiveDayForecastUnit;