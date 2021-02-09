import React from 'react';
import stories from '../../../Images/abcStories.png';

class ABCStoriesPage extends React.Component {
    constructor() {
        super();
        this.state =
        {
        };
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center"><h1 className="pageHead">ABC Stories</h1></div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
                <div className="cardGrid">
                    <div className="techContainer">
                        <p className="techHead">Swift</p>
                        <p className="techText"> I helped develop ABC Stories with Swift in Xcode. I helped establish app connection to the MongoDB external database. I created the Letter Imitation/ Free Write/ Puzzle Assessment portions of the app. As well as added additional models/audio to some of the AR Stories.</p>
                        <a className="techText lightText" href="https://apps.apple.com/us/app/abc-stories/id1539194514">App in Apple App Store</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">React</p>
                        <p className="techText"> I developed a lot of the front-end framework for the companion website to the ABC Stories app. It was my first experience with React and I learned a lot from this first project.</p>
                        <a className="techText lightText" href="https://abcgoapp.org">ABC Go Companion Website</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">GitHub</p>
                        <p className="techText"> A lot of the projects I have on this site use GitHub. However, as this was a large project for the GIMM Works team, GitHub was instrumental in allowing the developement and art teams to complete this project.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">'ABC Stories' Description </p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={stories} alt="Swatch Book App Icon" />
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src="" alt="Three app wireframe pages showing Home, Add, and Details page mockup." />
                    </div>
                    <div className="descriptionTextContainer">
                        <p className="descriptionText"> Puzzle View / Free Write / Letter Imitation Breakdown</p>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">Here is the tutorial from GIMM Works (The development team I work on). This video shows the whole app in action. Including the AR portions!</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <iframe className="videoFrame" src="https://www.youtube.com/embed/f6TUAltSobQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Swatch Book Demo"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default ABCStoriesPage;