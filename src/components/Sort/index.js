import React from 'react';
import Classnames from 'classnames';
import './Sort.scss';

const Sort = ({ options, activeIndex }) => (
    <ul className='Sort'>
        {options.map((option) => <li key={option.index} className={Classnames({'Sort-activeSort': activeIndex === option.index})}>sort <span className='Sort-bold'>{option.name}</span></li>)}
    </ul>
);

export default Sort;
