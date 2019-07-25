import React, { Component } from 'react';
import { Overview, Details } from '../'
import './Deal.scss';

class Deal extends Component {
    state = {
        overviewToggled: false
    }

    toggleOverview = () => {
        const { overviewToggled } = this.state;

        this.setState({overviewToggled: !overviewToggled})
    }

    render() {
        const { hotelName, location, stars, group, date, duration, departingFrom, price, image, overview } = this.props.deal;
        const { overviewToggled } = this.state;
        return (
            <div className='Deal'>
                <Details hotelName={hotelName} location={location} stars={stars} group={group} date={date} duration={duration} departingFrom={departingFrom} price={price} image={image} toggleOverview={this.toggleOverview} overviewToggled={overviewToggled} />
                {overview && overviewToggled && <Overview overview={overview} />}
            </div>
        )
    }
};

export default Deal;