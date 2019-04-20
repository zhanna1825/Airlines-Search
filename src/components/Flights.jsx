import React from 'react';
import Flight from './Flight';

const Flights = ({ flights = [], routes = [] }) => (
    <div>
        {flights.map((flight, i) => <Flight key={i} flight={flight} routes={routes} /> )}
    </div>
)

export default Flights;