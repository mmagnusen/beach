import React from 'react';
import beach from '../../assets/hotel-image-1.png';
import { BookingInfo } from '../';
import './Details.scss';

const Details = ({ title, location, stars, group, date, duration, departingFrom, price, image, }) => (
    <div className='Details'>
        <img src={beach} alt='holiday hotel'/>
        <BookingInfo title={title} location={location} stars={stars} group={group} date={date} duration={duration} departingFrom={departingFrom} price={price}/>
    </div>
);

export default Details