import React, { Component } from 'react';
import './App.css';
import gitHubImage from './Images/GitHub-Mark-Light-32px.png';
import linkedInImage from './Images/LI-In-Bug.png';
import logo from './Images/jayCircleLogo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import HomePage from './Pages/HomePage/homepage.component';
import AboutPage from './Pages/AboutPage/aboutpage.component';
import WorksPage from './Pages/WorksPage/workspage.component';
import PlayPage from './Pages/PlayPage/playpage.component';
import SwatchBookPage from './Pages/ProjectPages/SwatchBookPage/swatchbookpage.component';
import ABCStoriesPage from './Pages/ProjectPages/ABCStoriesPage/abcstoriespage.component';
import PhilotesPage from './Pages/ProjectPages/PhilotesPage/philotespage.component';
import RetailPage from './Pages/ProjectPages/RetailPage/retailpage.component';
import MythTextPage from './Pages/ProjectPages/MythTextPage/mythtextpage.component';

class App extends Component
{
  constructor()
  {
    super();
    this.state = { 
      page:'Home',
    };
  }
  render(){
    return (
      <div>
        <Navbar className="navHead" expand="lg" variant="dark">
          <Link className="medPadding" to="/">
            <img
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Jasmine Young Logo"
            />
          </Link>
          <Link className="medPadding navLink navBrand" to="/">Jasmine Young</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Link className="navLink" to="/">Home</Link>
              <Link className="navLink" to="/work">Work</Link>
              <Link className="navLink" to="/about">About</Link>
              <Link className="navLink" to="/play">Play</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/work" component={WorksPage}/>
          <Route exact path="/work/swatchbook" component={SwatchBookPage}/>
          <Route exact path="/work/abcStories" component={ABCStoriesPage}/>
          <Route exact path="/work/philotes" component={PhilotesPage}/>
          <Route exact path="/work/retail" component={RetailPage}/>
          <Route exact path="/work/mythText" component={MythTextPage}/>
          <Route exact path="/play" component={PlayPage}/>
          <Route path="/*" component={HomePage}/>
        </Switch>
        <footer className="footer foot medPadding align-items-center">
          <div className="footChild">
            <a className="medPadding" href="https://github.com/jasmineyoung423"><img src={gitHubImage} alt="GitHub Logo"/></a>
            <a className="medPadding" href="https://www.linkedin.com/in/jasmine-young-a43336195/"><img className="footerImage" src={linkedInImage} alt="LinkedIn Logo"/></a>
          </div>
          <div className="footChild">
            <p className="footerText medPadding">Jasmine Young 2021</p>
          </div>
          <div className="footChild">
            <HashLink className="linkText medPadding" to="/about#contact">Contact Me!</HashLink>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;