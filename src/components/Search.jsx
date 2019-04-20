import React, { Component } from 'react';
import moment from 'moment';
import { searchOptions } from '../data/searchOptions';



class Search extends Component {
    state = {
        origin: String(),
        destination: String(),
        departureDate: String(),
        returnDate: String(),
        passengerCount: Number(),
        tripType: String(),
        fareClass: String(),
    }
    handleInputChange = field => e => this.setState({ [field]: e.target.value });
    handleDateChange = field => e => (
        e.target.value[0] === "0" 
        ? this.setState({ [field]: moment(e.target.value).format("M/DD/YYYY") })
        : this.setState({ [field]: moment(e.target.value).format("MM/DD/YYYY") })
    )
    handleNumberInputChange = field => e => this.setState({ [field]: Number(e.target.value) })
    handleSubmit = e => {
        e.preventDefault();
        const { searchFlights } = this.props
        searchFlights(this.state)
    }

    render() {
        const { passengerCount, tripType } = this.state
        return (
            <form className='main' onSubmit={this.handleSubmit}>
                <div>
                    <label>Trip Type:       </label>
                    {searchOptions.tripType.map(type => (
                        <div className='type'  key={type.value}>
                            <label>{type.label}</label>
                            <input type="radio" value={type.value} checked={tripType === type.value} onChange={this.handleInputChange('tripType')} />
                        </div>
                        )
                    )}
                </div>
                <div>
                    <label>Origin   </label>
                    <select className='origin' defaultValue="placeholder" required onChange={this.handleInputChange("origin")}>
                        <option value="placeholder" disabled>Origin</option>
                        {searchOptions.airports.map(airport => <option key={airport.value} value={airport.value}>{airport.label}</option>)}
                    </select>
                </div>
                <div>
                    <label>Destination   </label>
                    <select  className='destination' defaultValue="placeholder" required  onChange={this.handleInputChange("destination")}>
                        <option value="placeholder" disabled>Destination</option>
                        {searchOptions.airports.map(airport => <option key={airport.value} value={airport.value}>{airport.label}</option>)}
                    </select>
                </div>
                <div>
                    <label>Departure Date</label>
                    <input required type="date" onChange={this.handleDateChange("departureDate")} />
                    <label>Return Date</label>
                    <input required={tripType === "roundTrip"} type="date" onChange={this.handleDateChange("returnDate")} />
                </div>
                <div>
                    <label>Number of Passengers</label>
                    <input type="number" value={passengerCount} onChange={this.handleNumberInputChange("passengerCount")} />
                </div>
                <div>
                    <label>Fare Class  </label>
                    <select defaultValue="placeholder" required onChange={this.handleInputChange("fareClass")}> 
                        <option value="placeholder" disabled>Fare Class</option>
                        {searchOptions.fareClass.map(fare => <option key={fare.value} value={fare.value}>{fare.label}</option>)}
                    </select>
                </div>
                <div>
                    <label>Promo Code</label>
                    <input  type="text" />
                </div>
                <div>
                    <input className='btn2' type="submit" value="Search Flights" />
                </div>
            </form>
        )
    }
}

export default Search
