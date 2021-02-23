import React from 'react';
import './homepage.styles.css';
import models from '../../Images/models.png';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="cover d-flex align-items-center justify-content-center">
          <h1 className="mainText boxText">Hi, I'm Jasmine. And I really enjoy programming. I love being able to create apps and games in mixed reality that can help make people's lives easier. Such as, making learning fun for kids.</h1>
          <div className="imageBG">
            <img className="mainImage mediumPadding" src={models} alt="3D Rendering of a Low Poly VR Headset, Phone, and Keyboard." />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;