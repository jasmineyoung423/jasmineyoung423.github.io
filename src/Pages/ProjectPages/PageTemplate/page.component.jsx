import React from 'react';
import './page.styles.css';

class Page extends React.Component {
  constructor() {
    super();
    this.state =
    {
    };
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center"><h1 className="pageHead">Project Name</h1></div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
        <div className="cardGrid">
          <div className="techContainer">
            <p className="techHead">Language</p>
            <p className="techText"> What language used for.</p>
            <a className="techText lightText" href="https://github.com/jasmineyoung423" rel="noopener noreferrer" target="_blank">GitHub Code Repository</a>
          </div>
          <div className="techContainer">
            <p className="techHead">Tech2</p>
            <p className="techText"> What used for</p>
          </div>
          <div className="techContainer">
            <p className="techHead">Tech3</p>
            <p className="techText"> What used for</p>
          </div>
          <div className="techContainer">
            <p className="techHead">Tech4</p>
            <p className="techText"> What used for</p>
          </div>
        </div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
        <div className="descriptionContainer">
          <div className="descriptionTextContainer">
            <p className="descriptionText">Project Description</p>
          </div>
          <div className="descriptionImageContainer">
            <img className="iconImage mediumPadding" src="" alt="Philotes' Quest Title Screen" />
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
            <p className="descriptionText"> Progress Video</p>
          </div>
          <div className="descriptionImageContainer">
            <iframe className="videoFrame" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Swatch Book Demo"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;