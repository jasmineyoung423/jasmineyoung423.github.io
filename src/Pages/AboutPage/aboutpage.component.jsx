import React from 'react';
import './aboutpage.styles.css';
import gitHubImage from '../../Images/GitHub-Mark-Light-64px.png';
import linkedInImage from '../../Images/LI-In-Bug.png';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center"><h1 className="pageHead">About Me</h1></div>
                <div className="profileCover">
                    <p className="profileText boxText">Hello! My name is Jasmine Young. I am a Games Interactive Media and Mobile (GIMM) Senior at Boise State University. I work part-time as a developer for the GIMM department. I mostly work with Swift in Xcode or with C# in Unity. When I'm not coding, I'm usually reading, sewing, watching YouTube, or playing with makeup.</p>
                    <div className="profileImageBG">
                        <img className="profileImage mediumPadding" src='' alt="Jasmine Young" />
                    </div>
                </div>
                <div className="d-flex justify-content-center" id="contact"><h2 className="pageHead">Contact Me!</h2></div>
                <div className="contactGrid">
                    <a className="medPadding linkText" href="https://github.com/jasmineyoung423"><img className="contactImage" src={gitHubImage} alt="GitHub Logo" />Github</a>
                    <a className="medPadding linkText" href="https://www.linkedin.com/in/jasmine-young-a43336195/"><img className="contactImage" src={linkedInImage} alt="LinkedIn Logo" />LinkedIn</a>
                    <a className="medPadding linkText" href="mailto:missjayoung@gmail.com"><img className="contactImage" src='' alt="Envelope" />missjayoung@gmail.com</a>
                </div>
            </div>
        );
    }
}

export default AboutPage;