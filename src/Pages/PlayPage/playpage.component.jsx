import React from 'react';
import './playpage.styles.css';

import ThreeScene from '../../Components/three-scene/three-scene.component'


class HomePage extends React.Component {
  render() {
    return (
      <div >
        <div className="d-flex justify-content-center"><h1 className="pageHead">Page Still In Development</h1></div>
        <ThreeScene />
      </div>
    );
  }
}

export default HomePage;