import React from 'react';
import './homepage.styles.css';
import models from '../../Images/models.png';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state =
    {
    };
  }

  render() {
    return (
      <div>
        <div className="cover d-flex align-items-center justify-content-center">
          <h1 className="mainText boxText">*Site Under Development* Hi, I'm Jasmine. I love coding! I like being able to create apps and games in mixed reality that can make learning fun, or to relax to after a long day.</h1>
          <div className="imageBG">
            <img className="mainImage mediumPadding" src={models} alt="3D Rendering of a Low Poly VR Headset, Phone, and Keyboard." />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;