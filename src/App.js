import React, { Component } from 'react';
import './App.css';
import gitHubImage from './Images/GitHub-Mark-Light-32px.png';
import linkedInImage from './Images/LI-In-Bug.png';
import logo from './Images/jy_logo.png';
import name from './Images/JY_Name_only.png';
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
import BlockPage from './Pages/ProjectPages/BlockPage/blockpage.component';
import HandWashPage from './Pages/ProjectPages/HandWashPage/handwashpage.component';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar className="navHead" expand="lg" variant="dark">
          <Link className="medPadding" to="/">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="Jasmine Young Logo"
            />
          </Link>
          <Link className="medPadding" to="/"><img
              src={name}
              height="50"
              className="d-inline-block align-top nameLogo"
              alt="Jasmine Young"
            /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Link className="navLink" to="/">Home</Link>
              <Link className="navLink" to="/work">Work</Link>
              <Link className="navLink" to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work" component={WorksPage} />
          <Route exact path="/work/swatchbook" component={SwatchBookPage} />
          <Route exact path="/work/abcStories" component={ABCStoriesPage} />
          <Route exact path="/work/philotes" component={PhilotesPage} />
          <Route exact path="/work/retail" component={RetailPage} />
          <Route exact path="/work/mythText" component={MythTextPage} />
          <Route exact path="/work/block" component={BlockPage} />
          <Route exact path="/work/handwashing" component={HandWashPage} />
          <Route exact path="/play" component={PlayPage} />
          <Route path="/*" component={HomePage} />
        </Switch>
        <footer className="footer foot medPadding align-items-center">
          <div className="footChild">
            <a className="medPadding" href="https://github.com/jasmineyoung423" rel="noopener noreferrer" target="_blank"><img src={gitHubImage} alt="GitHub Logo" /></a>
            <a className="medPadding" href="https://www.linkedin.com/in/jasmine-young-a43336195/" rel="noopener noreferrer" target="_blank"><img className="footerImage" src={linkedInImage} alt="LinkedIn Logo" /></a>
          </div>
          <div className="footChild">
            <p className="footerText medPadding">Jasmine Young 2021</p>
          </div>
          <div className="footChild">
            <HashLink className="linkText medPadding" to="/about#contact">Contact Me!</HashLink>
          </div>
        </footer>
        <div className="footerText d-flex align-items-center justify-content-center"><p>Icons made by <a className="lightText" href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs" rel="noopener noreferrer" target="_blank"> DinosoftLabs</a> from <a className="lightText" href="https://www.flaticon.com/" title="Flaticon" rel="noopener noreferrer" target="_blank"> www.flaticon.com</a></p></div>
      </div>
    );
  }
}

export default App;