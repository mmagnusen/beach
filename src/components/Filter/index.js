import React from 'react';
import { Button, Select } from '../';
import { BUTTON_TYPE } from '../../constants';
import './Filter.scss';

const Filter = ({ airports, filterAirport, dates, filterDate, reset }) => (
    <form className='Filter'>
        <div className='Filter-airport'>
            <label>Filter by airport:</label>
            <Select options={airports.availableAirports} onChange={filterAirport} value={airports.chosenAirport} />
        </div>
        <div className='Filter-date'>
            <label>Filter by departure date:</label>
            <Select options={dates.availableDates} onChange={filterDate} value={dates.chosenDate} />
        </div>
        <Button type={BUTTON_TYPE.RESET} onClick={reset}>
            Reset
        </Button>
    </form>
);

export default Filter;