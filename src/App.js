import React, { Component} from 'react';
import { Deals, Sort } from './components';
import { background, hotelOne, hotelTwo, hotelThree } from './assets';
import './Holidays.scss';

class App extends Component {
  state = {
    deals: [
      { 
        hotelName: 'Iberostar Grand Salome',
        location: 'Costa Adeje Tenerife',
        stars: 5,
        group: '2 Adults, 2 children & 1 infant',
        date: '3rd July 2019',
        duration: '7 days',
        departingFrom: 'East Midlands',
        price: 1136.50,
        image: hotelOne,
        overview: 'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
      },
      { 
        hotelName: 'Aguamarina Golf Hotel',
        location: 'Costa Adeje, Tenerife',
        stars: 4,
        group: '2 Adults, 1 child',
        date: '27th May 2019',
        duration: '7 days',
        departingFrom: 'Liverpool',
        price: 696.80,
        image: hotelTwo,
        overview: 'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
      },
      { 
        hotelName: 'La Piramides Resort',
      location: 'Costa  Adeje, Tenerife',
      stars: 3,
      group: '2 Adults, 2 children',
      date: '3rd July 2019',
      duration: '7 days',
      departingFrom: 'Manchester',
      price: 499.99,
      image: hotelThree,
      overview: 'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
      }
    ],
    sort: {
      options: ['alphabetically', 'price', 'star rating'], 
      activeIndex: 'star rating',
    }
  }

  sortBy = (activeIndex) => {
    const { deals, sort } = this.state;
    let sortedArray = sort.options;

    if (activeIndex === 'alphabetically') {
      deals.sort((a, b) => (a.hotelName > b.hotelName) ? 1 : -1)
    }

    if (activeIndex === 'price') {
      deals.sort((a, b) => (a.price > b.price) ? 1 : -1)
    }

    if (activeIndex === 'star rating') {
      deals.sort((a, b) => (a.stars > b.stars) ? 1 : -1)
    }
    this.setState({
      sort: {
        options: sortedArray,
        activeIndex
      }
    })
  }

  render() {

    const { deals, sort } = this.state;

    return (
      <div className="App">
        <section className='Holidays' style={{ backgroundImage: `url(${background})`}}>
          <main>
            <Sort options={sort.options} activeIndex={sort.activeIndex} sortBy={this.sortBy} />
            <Deals deals={deals}/>
        </main>
        </section>
      </div>
    );
  }
};

export default App;