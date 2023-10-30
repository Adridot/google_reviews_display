import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardHeader, Avatar } from '@mui/material';
import { fetchPlaceReviews } from './GooglePlacesAPI';

const Reviews = ({ placeId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function loadReviews() {
            const reviewsData = await fetchPlaceReviews(placeId);
            setReviews(reviewsData);
        }
        loadReviews();
    }, [placeId]);

    return (
        <div>
            {reviews.map((review, index) => (
                <Card key={index} style={{ marginBottom: '1rem' }}>
                    <CardHeader
                        avatar={<Avatar alt={review.author_name} src={review.profile_photo_url} />}
                        title={review.author_name}
                        subheader={new Date(review.time * 1000).toDateString()}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {review.text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Reviews;
