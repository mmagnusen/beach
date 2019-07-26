import React from 'react';
import { BookingInfo, OverviewToggle } from '../';
import './Details.scss';

const Details = ({ hotelName, location, stars, group, date, duration, airport, price, image, toggleOverview, overviewToggled }) => (
    <div className='Details'>
        <div className='Details-imageToggle' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
            <OverviewToggle toggleOverview={toggleOverview} overviewToggled={overviewToggled} />
        </div>
        <BookingInfo 
            hotelName={hotelName} 
            location={location} 
            stars={stars} 
            group={group} 
            date={date} 
            duration={duration} 
            airport={airport} 
            price={price}
        />
    </div>
);

export default Details;