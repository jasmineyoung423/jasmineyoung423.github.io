import React from 'react';
import retail from '../../../Images/retail2.png';
import retailDemo from '../../../Images/retailDemo.png';

class RetailPage extends React.Component {
  render() {
    return (
        <div>
            <div className="d-flex justify-content-center"><h1 className="pageHead">Retail Simulator</h1></div>
            <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
            <div className="cardGrid">
                <div className="techContainer">
                    <p className="techHead">C++</p>
                    <p className="techText">I am developing the Retail Simulator with C++ in Unreal Engine 4. This is my second project in UE4, and I'm still figuring it out as I go.</p>
                    <a className="techText lightText" href="https://github.com/Xblad3Mstr/Retail-Game">GitHub Code Repository</a>
                </div>
                <div className="techContainer">
                    <p className="techHead">Blueprints</p>
                    <p className="techText">I'm using blueprints to connect User Widgets to the C++ code I'm writing. And to make instanceable objects for spawning.</p>
                </div>
                <div className="techContainer">
                    <p className="techHead">ART</p>
                    <p className="techText"> All models, textures, and sounds were created or sourced by Mikenna Fuit.</p>
                    <a className="techText lightText" href="">Mikenna's Portfolio</a>
                </div>

            </div>
            <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
            <div className="descriptionContainer">
                <div className="descriptionTextContainer">
                    <p className="descriptionText">Mikenna and I know what it’s like to be in the wonderful world of retail. Throughout our years, we’ve built up some frustration and we wanted to create a place for people like us to let their frustrations out and anyone who just wants to wreak some sort of havoc in a department store, The Store. We thought it’d be hilarious to create a stupid game inspired by retail. In this game, you’d have incentive to be good to customers, like the obvious making extra money or getting some more “Get out of jail free” cards…or in this case the manager’s office. If you don’t want to do that then you could tell them off like I’m sure a lot of us have wanted to do at some point or another. Don’t want to deal with the manager? Use one of those special cards that was mentioned before.</p>
                </div>
                <div className="descriptionImageContainer">
                    <img className="iconImage mediumPadding" src={retail} alt="Retail Simulator Title Screen" />
                </div>
            </div>
            <div className="descriptionContainer">
                <div className="descriptionImageContainer">
                    <img className="iconImage mediumPadding" src={retailDemo} alt="Screenshot of a robot in front of a Customer Service sign." />
                </div>
                <div className="descriptionTextContainer">
                    <p className="descriptionText">This project is my first experience with C++. So, development of this game is a bit more interesting with troubleshooting, and involves a lot more documentation and google searching than some of my other projects.</p>
                </div>
            </div>
            <div className="descriptionContainer">
                <div className="descriptionTextContainer">
                    <p className="descriptionText"> Progress Video: Coming Soon!</p>
                </div>
                <div className="descriptionImageContainer">
                    <iframe className="videoFrame" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Retail Simulator Demo"></iframe>
                </div>
            </div>
        </div>
    );
  }
}

export default RetailPage;