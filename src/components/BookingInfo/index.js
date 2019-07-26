import React from 'react';
import { Button, Rating } from '../';
import { renderPlural } from '../utils';
import { BUTTON_TYPE } from '../../constants';
import './BookingInfo.scss';

const currency = '£';

const getGroup = ({ adults = null, children = null, enfants = null }) => {
   const adultText = renderPlural(adults, 'adult');
   const childrenText =  renderPlural(children, 'child', 'children');
   const enfantsText = renderPlural(enfants, 'enfant');
   return `${adultText} ${childrenText} ${enfantsText}`;
}

const BookingInfo = ({ hotelName, location, stars, group, date, duration, airport, price }) => (
    <section className='BookingInfo'>
        <p className='BookingInfo-name'>{hotelName}</p>
        <p className='BookingInfo-location'>{location}</p>
        <Rating stars={stars} />
        <p className='BookingInfo-group'>{getGroup(group)}</p>
        <p className='BookingInfo-length'><span className='bold'>{date}</span> for <span className='bold'>{duration}</span></p>
        <p className='BookingInfo-departing'> departing from <span className='bold'>{airport}</span></p>
        <Button type={BUTTON_TYPE.CTA}>
            <p className='BookingInfo-bookTitle'>Book now</p>
            <p className='BookingInfo-bookPrice'>{`${currency}${price}`}</p>  
        </Button>
    </section>
);

export default BookingInfo;