import React, { Component} from 'react';
import { Deals, Sort, Filter } from './components';
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
        airport: 'East Midlands',
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
        airport: 'Liverpool',
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
        airport: 'Manchester',
        price: 499.99,
        image: hotelThree,
        overview: 'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
      }
    ],
    sort: {
      options: [
        {
          name: 'alphabetically',
          icon: 'fas fa-sort-alpha-down' 
        }, 
        {
          name: 'price', 
          addJoiner: true,
          icon: 'fas fa-pound-sign' 
        }, 
        {
          name: 'star rating', 
          addJoiner: true,
          icon: 'fas fa-star' 
        }], 
      activeSort: 'price',
    },
    filter: {
      airports: {
        availableAirports: ['All airports', 'Manchester', 'Liverpool', 'East Midlands'],
        chosenAirport: 'All airports',
      },
      dates: {
        availableDates: ['All dates', '3rd July 2019', '27th May 2019'],
        chosenDate: 'All dates',
      },
    }
  }

  componentDidMount() {
    this.sortBy('price');
  }

  sortBy = (activeSort) => {
    const { deals, sort } = this.state;
    let sortedArray = sort.options;

    if (activeSort === 'alphabetically') {
      deals.sort((a, b) => (a.hotelName > b.hotelName) ? 1 : -1)
    }

    if (activeSort === 'price') {
      deals.sort((a, b) => (a.price > b.price) ? 1 : -1)
    }

    if (activeSort === 'star rating') {
      deals.sort((a, b) => (a.stars < b.stars) ? 1 : -1)
    }
    this.setState({
      sort: {
        options: sortedArray,
        activeSort
      }
    })
  }

  filterAirport = (chosenAirport) => {

    this.setState({
      filter: {
        ...this.state.filter,
        airports: {
          ...this.state.filter.airports,
          chosenAirport 
        }
      }
    })
  };

  filterDate = (chosenDate) => {

    this.setState({
      filter: {
        ...this.state.filter,
        dates: {
          ...this.state.filter.dates,
          chosenDate 
        }
      }
    })
  };

  filteredDeals = () => {
    const { deals, filter } = this.state;
    const filteredByAirport = filter.airports.chosenAirport === 'All airports' ? deals : deals.filter((deal) => deal.airport === filter.airports.chosenAirport)
    return filter.dates.chosenDate === 'All dates' ? filteredByAirport : deals.filter((deal) => deal.date === filter.dates.chosenDate);
  }

  render() {

    const { sort, filter } = this.state;

    return (
      <div className="App">
        <section className='Holidays' style={{ backgroundImage: `url(${background})`}}>
          <main>
            <section>
              <Sort options={sort.options} activeSort={sort.activeSort} sortBy={this.sortBy} />
              <Filter airports={filter.airports} filterAirport={this.filterAirport} dates={filter.dates} filterDate={this.filterDate}/>
            </section>
            <Deals deals={this.filteredDeals()}/>
        </main>
        </section>
      </div>
    );
  }
};

export default App;
