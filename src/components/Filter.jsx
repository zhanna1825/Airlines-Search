import React, { Component } from 'react';


class Filter extends Component {
    state = { departureTime: String(), arrivalTime: String(), priceUSD: Number() }
    handleTimeChange = field => e => (
        e.target.value[0] === "0" 
        ? this.setState({ [field]: e.target.value.substr(1) }) 
        : this.setState({ [field]: e.target.value })  
    )
    handlePriceChange = field => e => this.setState({ [field]: Number(e.target.value) })
    handleSubmit = e => {
        e.preventDefault()
        this.props.handleFilter(this.state)
    }
    render() {
        return (
            <div>
                <h3 className="knockout">Filter Results</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="filter">
                        <label>Departure Time </label>
                        <input type="time" onChange={this.handleTimeChange("departureTime")}/>
                    </div>
                    <div className="filter">
                        <label>Arrival Time </label>
                        <input type="time" onChange={this.handleTimeChange("arrivalTime")}/>
                    </div>
                    <div className='filter'>
                        <label>Price </label>
                        <input type="number" onChange={this.handleTimeChange("priceUSD")}/>
                    </div>
                    <div>
                        <input className='btn1' type="submit" value="Filter" />
                    </div>
                </form>
                <button className='btn' onClick={this.props.resetFilters}>Reset Filters</button>
            </div>
        )
    }
}

export default Filter
