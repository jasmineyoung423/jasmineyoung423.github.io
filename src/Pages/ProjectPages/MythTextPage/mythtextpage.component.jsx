import React from 'react';
import mythText from '../../../Images/mythText.png';
import mythLogin from '../../../Images/mythLogin.png';

class MythTextPage extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center"><h1 className="pageHead">Myth Text</h1></div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
        <div className="cardGrid">
          <div className="techContainer">
            <p className="techHead">JavaScript/PHP</p>
            <p className="techText">I used php for routing and database connection (for login storage). And JavaScript was used for the text adventure (Interactive Fiction) game portion of the website.</p>
            <a className="techText lightText" href="https://github.com/jasmineyoung423/site">GitHub Code Repository</a>
          </div>
          <div className="techContainer">
            <p className="techHead">HTML/CSS</p>
            <p className="techText">The requirements for this assignment stipulated that I was to use HTML for the main code, and CSS only. Bootstrap was not allowed. And with my site being a game. That was what I focused on during development.</p>
          </div>
          <div className="techContainer">
            <p className="techHead">Heroku</p>
            <p className="techText">Heroku is hosting the site, as well as hosts the ClearDB MySQL database. The code is hosted on GitHub.</p>
            <a className="techText lightText" href="https://tranquil-wave-76416.herokuapp.com/">Myth Text on Heroku</a>
          </div>
        </div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
        <div className="descriptionContainer">
          <div className="descriptionTextContainer">
            <p className="descriptionText">Myth Text was the first website I built from scratch by myself. It's main files are PHP, and has login functionality. But mainly, it's a text adventure website. The only adventure currently available on the site is based on the myth of Pandora's Box. The whole text adventure is written in JavaScript. And it stores the state of the game in cookies, so if you close the window, you lose your progress.</p>
          </div>
          <div className="descriptionImageContainer">
            <img className="iconImage mediumPadding" src={mythText} alt="Myth Text Home Page Screenshot" />
          </div>
        </div>
        <div className="descriptionContainer">
          <div className="descriptionImageContainer">
            <img className="iconImage mediumPadding" src={mythLogin} alt="Myth Text Login Page Screenshot" />
          </div>
          <div className="descriptionTextContainer">
            <p className="descriptionText">The site is still up and hosted on Heroku. It can still be played. And you can still create a login and return and login again, since the database stores that info. <a className="lightText" href="https://tranquil-wave-76416.herokuapp.com/">See Myth Text on Heroku.</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default MythTextPage;