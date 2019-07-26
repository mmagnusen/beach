import React from 'react';
import Classnames from 'classnames';
import './Sort.scss';

const shouldApplyBorder = (options, activeSort, option) => {
    const indexOfActiveSort = options.indexOf(options.find(option => option.name === activeSort));
    const idexOfOption = options.indexOf(options.find(currentOption => currentOption.name === option.name));    
    return indexOfActiveSort !== idexOfOption && idexOfOption !== options.length - 1 && idexOfOption !== indexOfActiveSort  - 1;
};

const Sort = ({ options, activeSort, sortBy }) => (
    <ul className='Sort'>
        {options.map((option) => 
            <li 
                key={option.name} 
                className={Classnames(
                    {'Sort-activeSort': activeSort === option.name}, 
                    {'Sort-applyBottomBorder': shouldApplyBorder(options, activeSort, option)})} 
                onClick={() => sortBy(option.name)}
            >
                {`sort ${option.addJoiner ? 'by' : ''}`}
                <span className='Sort-bold'>{option.name}</span>
                <i className={option.icon} />
            </li>
        )}
    </ul>
);

export default Sort;
