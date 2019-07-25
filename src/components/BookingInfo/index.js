import React from 'react';
import { Button } from '../';
import './BookingInfo.scss';

const currency = '£';

const BookingInfo = ({ hotelName, location, stars, group, date, duration, departingFrom, price}) => (
    <div className='BookingInfo'>
        <p className='BookingInfo-name'>{hotelName}</p>
        <p className='BookingInfo-location'>{location}</p>
        <p className='BookingInfo-group'>{group}</p>
        <p className='BookingInfo-length'>{date} for <span className='bold'>{duration}</span></p>
        <p className='BookingInfo-departing'> departing from <span className='bold'>{departingFrom}</span></p>
        <Button>
            <p className='BookingInfo-bookTitle'>Book now</p>
            <p className='BookingInfo-bookPrice'>{`${currency}${price}`}</p>  
        </Button>
    </div>
);

export default BookingInfo;