import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const fetchPlaceReviews = async (placeId) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        };
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${API_KEY}`,
            { headers }
        );
        return response.data.result.reviews;
    } catch (error) {
        console.error('Error fetching place reviews:', error);
        return [];
    }
};
