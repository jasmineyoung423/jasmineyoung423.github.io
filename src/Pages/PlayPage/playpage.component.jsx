import React from 'react';
import './playpage.styles.css';

import ThreeScene from '../../Components/three-scene/three-scene.component'


class HomePage extends React.Component {
  constructor() {
    super();
    this.state =
    {
    };
  }

  render() {
    return (
      <div >
        <h1 className="mainText">Page Still In Development</h1>
        <ThreeScene />
      </div>
    );
  }
}

export default HomePage;