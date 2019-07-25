import React from 'react';
import { Deal } from './../';

const Deals = ({ deals }) => (
    <div>
        {deals.map(deal => <Deal key={deal.title} deal={deal} />)}
    </div>
);

export default Deals;