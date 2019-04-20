import React from 'react';
import Routes from './Routes';

const Flight = ({
    flight: {
        destination = String(),
        origin = String(),
        tripType = String(),
        departureDate = String(),
        returnDate = String(),
        routeCoverImage = String(),
        fareClass = String(),
        priceUSD = Number(),
    } = {},
    routes = []
}) => (
    <div className='form'>
        <img src={routeCoverImage} style={{ maxHeight: 100, maxWidth: 100 }} />
        <p className='destination1'> {destination} - {origin}</p>
        <p>Trip Type: {tripType}</p>
        <p>Departure Date: {departureDate}</p>
        <p>Return Date: {returnDate}</p>
        <p>Fare Class: {fareClass}</p>
        <p className='price'>price USD:  ${priceUSD}</p>
        { !!routes.length && <Routes routes={routes} /> }
    </div>
)

export default Flight;