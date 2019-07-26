import React from 'react';
import { range } from '../utils';
import './Rating.scss';

const Rating = ({ stars }) => (
    <div className='Rating'>{range(stars).map((index) => <i key={index} className="fas fa-star yellow" />)}</div>
);

export default Rating;


