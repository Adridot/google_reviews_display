import React from 'react';
import Reviews from './Reviews';

const MainComponent = () => {
    const placeId = process.env.REACT_APP_PLACE_ID;
    return (
        <div>
            <h1>Place Reviews</h1>
            <Reviews placeId={placeId} />
        </div>
    );
};

export default MainComponent;
