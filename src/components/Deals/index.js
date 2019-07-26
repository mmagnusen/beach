import React from 'react';
import { Deal } from './../';

const Deals = ({ deals }) => (
    <div>
        {deals.map((deal, index) => <Deal key={index} deal={deal} />)}
    </div>
);

export default Deals;