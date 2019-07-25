import React from 'react';

const displayStars = (star) => {

}
const Rating = ({ stars }) => {
    return Array(stars).map(() => <i className="fas fa-star" />)
};

export default Rating;


