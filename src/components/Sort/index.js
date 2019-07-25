import React from 'react';
import Classnames from 'classnames';
import './Sort.scss';

const Sort = ({ options, activeIndex, sortBy }) => (
    <ul className='Sort'>
        {options.map((option) => <li key={option} className={Classnames({'Sort-activeSort': activeIndex === option})} onClick={() => sortBy(option)}>sort <span className='Sort-bold'>{option}</span></li>)}
    </ul>
);

export default Sort;
