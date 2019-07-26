import React from 'react';
import Classnames from 'classnames';
import './Button.scss';

const handleOnclick = (event, onClick = () => {}) => {
    event.preventDefault();
    onClick();
}

const Button = ({ children, type, onClick }) => (
    <button className={Classnames('Button', type)} onClick={(event) => handleOnclick(event, onClick)}>{children}</button>
);

export default Button;