import React from 'react';
import './Overview.scss';

const Overview = ({ overview }) => (
    <div className='Overview'>
        <h5>Overview</h5>
        <p>{overview}</p>
    </div>
);

export default Overview;