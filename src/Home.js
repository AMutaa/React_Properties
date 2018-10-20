import React, { Component } from 'react';

class Home extends Component {
  state = {
    properties: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://data.providenceri.gov/resource/r6n7-qjr6.json');

      const properties = await res.json();

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
            <p>{property.class}</p>
            <p>{property.class}</p>
            <p>{property.class}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
