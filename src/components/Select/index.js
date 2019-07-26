import React from 'react';
import './Select.scss';

const Select = ({ onChange, value, options }) => (
    <select onChange={(event) => onChange(event.target.value)} value={value} className='Select'>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
    </select>           
);

export default Select;