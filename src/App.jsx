import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Filter from './components/Filter';
import Flights from './components/Flights';

class App extends Component {
    state = { flights: [], routes: [] }
    async componentDidMount() {
        const { data: flights = [] } = await axios.get('https://everymundointernship.herokuapp.com/popularRoutes/FJ86FP42XQ24');
        this.setState({ flights })
    }
    searchFlights = async formData => {
        const { data: flights } = await axios.post('https://everymundointernship.herokuapp.com/search/FJ86FP42XQ24', formData, {
            headers: { "Content-Type": "application/json" }
        });
        this.setState({ flights, routes: flights[0].routes || [] })
    }
    handleFilter = ({ departureTime = String(), arrivalTime = String(), priceUSD = Number()  }) => {
        const { routes } = this.state
        const filteredRoutes = routes.filter(route => (
            route.departureTime === (departureTime || route.departureTime)
            && route.arrivalTime === (arrivalTime || route.arrivalTime)
            && route.priceUSD <= (priceUSD || route.priceUSD)
        ))
        this.setState({ routes: filteredRoutes })
    }
    resetFilters = _ => {
        const { flights: [{ routes }] } = this.state;
        if (routes) this.setState({ routes })
    }

    render() {
        const { flights, routes } = this.state
        return (
            <div>
                <header>Flights</header>
                <Search searchFlights={this.searchFlights} />
                <Filter handleFilter={this.handleFilter} resetFilters={this.resetFilters} />
                <Flights flights={flights} routes={routes} />
            </div>
        )
    }
}

export default App;
