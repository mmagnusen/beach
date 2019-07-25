import React from 'react';
import './BookingInfo.scss';

const BookingInfo = ({ title, location, stars, group, date, duration, departingFrom, price}) => (
    <div className='BookingInfo'>
        <p>{title}</p>
        <p>{location}</p>
    </div>
);

export default BookingInfo;