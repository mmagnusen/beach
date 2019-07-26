import React from 'react';
import './Filter.scss';

const Filter = ({airports, filterAirport, dates, filterDate}) => (
    <form className='Filter'>
        <div className='Filter-airport'>
            <label>Filter by airport:</label>
            <select onChange={(event) => filterAirport(event.target.value)} value={airports.chosenAirport}>
                {airports.availableAirports.map((airport) => <option value={airport} key={airport}>{airport}</option>)}
            </select>
        </div>
        <div className='Filter-date'>
            <label>Filter by departure date:</label>
            <select onChange={(event) => filterDate(event.target.value)} value={dates.chosenDate}>
                {dates.availableDates.map((date) => <option value={date} key={date}>{date}</option>)}
            </select>
        </div>
    </form>
);

export default Filter;