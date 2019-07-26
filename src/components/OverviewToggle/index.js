import React from 'react';
import './OverviewToggle.scss';

const OverviewToggle = ({ toggleOverview, overviewToggled }) => (
    <div onClick={toggleOverview} className='OverviewToggle'>
        <p>{overviewToggled ? 'Read less about this hotel' : 'Read more about this hotel'}</p>
        {overviewToggled ? <i className="fas fa-chevron-down" /> : <i className="fas fa-chevron-right" />}
    </div>
);

export default OverviewToggle;