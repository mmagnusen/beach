import React from 'react';
import beach from '../../assets/hotel-image-1.png';
import { BookingInfo, OverviewToggle } from '../';
import './Details.scss';

const Details = ({ hotelName, location, stars, group, date, duration, airport, price, image, toggleOverview, overviewToggled }) => (
    <div className='Details'>
        <div className='Details-imageToggle'>
            <img src={beach} alt='holiday hotel'/>
            <OverviewToggle toggleOverview={toggleOverview} overviewToggled={overviewToggled} />
        </div>
        <BookingInfo hotelName={hotelName} location={location} stars={stars} group={group} date={date} duration={duration} airport={airport} price={price}/>
    </div>
);

export default Details