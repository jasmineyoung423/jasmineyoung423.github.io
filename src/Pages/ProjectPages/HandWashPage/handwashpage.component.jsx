import React from 'react';
import handwash from '../../../Images/handWashing.png';
import washCard from '../../../Images/washCard.png';


class HandWashPage extends React.Component {
  render() {
    return (
      <div>
        <div className="topDescriptionBlock">
          <h1 className="pageHead">Hand Washing</h1>
          <p className = "descriptionText">The purpose of this app was to help teach young kids with Autism the proper (thorough) technique to wash their hands.</p>
        </div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
        <div className="cardGrid">
          <div className="techContainer">
            <p className="techHead">C#</p>
            <p className="techText"> This app was developed in Unity, in order to make it cross-platform.</p>
            <a className="techText lightText" href="https://github.com/EliKvar/GIMM310-Mobile-AR-App" rel="noopener noreferrer" target="_blank">View Code on GitHub!</a>
          </div>
          <div className="techContainer">
            <p className="techHead">ARCore / ARKit</p>
            <p className="techText">This is a cross-platform AR app. So it relies on ARCore(Android) and ARKit(iOS) to run.</p>
          </div>
          <div className="techContainer">
            <p className="techHead">Image Recognition</p>
            <p className="techText">The app uses image recognition to know what models/animations to show, and what sound to play.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
        <div className="descriptionContainer">
          <div className="descriptionTextContainer">
            <p className="descriptionText">This was for a Swift development class in the spring of 2020. So in the middle of development we switched from in-person to online. This caused us to have to shift our focus from Swift and ARKit to C# and ARCore/ARKit to fit the technology each of the members of this group had access to. I was responsible for the AR portion of the app specifically.</p>
          </div>
          <div className="descriptionImageContainer">
            <img className="iconImage mediumPadding" src={handwash} alt="Screenshot of a 3D modelled sink, soap dispenser, and hands superimposed in the view from a camera." />
          </div>
        </div>
        <div className="descriptionContainer">
          <div className="descriptionImageContainer">
            <iframe className="videoFrame" src="https://www.youtube.com/embed/Z_5mWJvnVvY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Hand Washing App Development"></iframe>
          </div>
          <div className="descriptionTextContainer">
            <p className="descriptionText">This is the development video Alex Chaney edited for our group, to show our development process for this app.</p>
          </div>
        </div>
        <div className="descriptionContainer">
          <div className="descriptionTextContainer">
            <p className="descriptionText">A member of my group, Alex Chaney, had the idea to create 'code cards'. One side a unique geometric pattern, and the other a picture of a step in the handwashing process. I took these images and used Unity's image recognition to tell the app which models and animations to show, where to place it within the view, and which sound to play.</p>
          </div>
          <div className="descriptionImageContainer">
            <img className="iconImage mediumPadding" src={washCard} alt="A man's hands being washed in a sink on the top. And a geometric pattern on the bottom." />
          </div>
        </div>
      </div>
    );
  }
}

export default HandWashPage;