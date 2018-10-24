import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  state = {
    properties: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://data.providenceri.gov/resource/r6n7-qjr6.json');
      const properties = await res.json();
      console.log(properties)
      this.setState({
        properties,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { properties } = this.state;
    return (
      <div>
        {properties.map((property, idx) => (
          <div key={idx}>
            <p>{property.formatted_address}</p>
            <p className="trial">{property.class}</p>
            <p>{property.owner_state}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
