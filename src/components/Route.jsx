import React from 'react';

const Route = ({ route }) => (
    <div style={{ border: '1px solid blue' }}>
        <p>departureTime: {route.departureTime} </p>
        <p>arrivalTime: {route.arrivalTime} </p>
        <p>priceUSD: ${route.priceUSD} </p>
    </div>
)

export default Route
