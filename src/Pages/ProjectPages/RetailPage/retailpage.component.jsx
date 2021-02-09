import React from 'react';
import retail from '../../../Images/retail2.png';

class RetailPage extends React.Component {
  constructor() {
    super();
    this.state =
    {
    };
  }

  render() {
    return (
        <div>
            <div className="d-flex justify-content-center"><h1 className="pageHead">Retail Simulator</h1></div>
            <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
            <div className="cardGrid">
                <div className="techContainer">
                    <p className="techHead">C++</p>
                    <p className="techText"> I am developing the Retail Simulator with C++ in Unreal Engine 4. This is my second project in UE4, nad I'm still figuring it out as I go.</p>
                    <a className="techText lightText" href="https://github.com/Xblad3Mstr/Retail-Game">GitHub Code Repository</a>
                </div>
                <div className="techContainer">
                    <p className="techHead">Blueprints</p>
                    <p className="techText"> I'm using blueprints to connect User Widgets to the C++ code I'm writing. And to make instanceable objects for spawning.</p>
                </div>
                <div className="techContainer">
                    <p className="techHead">ART</p>
                    <p className="techText"> All Models / Textures / Sounds created or sourced by Mikenna Fuit.</p>
                    <a className="techText lightText" href="">Mikenna's Portfolio</a>
                </div>

            </div>
            <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
            <div className="descriptionContainer">
                <div className="descriptionTextContainer">
                    <p className="descriptionText">'Philotes' Quest' Description</p>
                </div>
                <div className="descriptionImageContainer">
                    <img className="iconImage mediumPadding" src={retail} alt="Retail Simulator Title Screen" />
                </div>
            </div>
            <div className="descriptionContainer">
                <div className="descriptionImageContainer">
                    <img className="iconImage mediumPadding" src="" alt="Three app wireframe pages showing Home, Add, and Details page mockup." />
                </div>
                <div className="descriptionTextContainer">
                    <p className="descriptionText"> Something to HightLight</p>
                </div>
            </div>
            <div className="descriptionContainer">
                <div className="descriptionTextContainer">
                    <p className="descriptionText"> Progress Video (Get Mikenna to make one if OBS still doesn't work)</p>
                </div>
                <div className="descriptionImageContainer">
                    <iframe className="videoFrame" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Swatch Book Demo"></iframe>
                </div>
            </div>
        </div>
    );
  }
}

export default RetailPage;