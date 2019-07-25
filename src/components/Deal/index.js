import React from 'react';
import { Overview, Details } from '../'
import './Deal.scss';

const Deal = ({ title, location, stars, group, date, duration, departingFrom, price, image, overview }) => (
    <div className='Deal'>
        <Details title={title} location={location} stars={stars} group={group} date={date} duration={duration} departingFrom={departingFrom} price={price} image={image} />
        <Overview overview={overview} />
    </div>
);

export default Deal;