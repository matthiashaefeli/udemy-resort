import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: "this is a info for the cocktails"
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: "this is a info for hiking"
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: "this is a info the shuttle"
      },
      {
        icon: <FaBeer />,
        title: 'Stongest Beer',
        info: "this is a info for beer"
      }
    ]
  }

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
