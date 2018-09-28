import React, { Component } from 'react';

class Home extends Component {
  state = {
    properties: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://data.providenceri.gov/resource/r6n7-qjr6.json');
      const properties = res.json();
      console.log(properties);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>Hello There</h1>
      </div>
    );
  }
}

export default Home;
