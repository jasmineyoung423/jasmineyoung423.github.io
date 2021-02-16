import React from 'react';
import './aboutpage.styles.css';
import gitHubImage from '../../Images/GitHub-Mark-Light-64px.png';
import linkedInImage from '../../Images/LI-In-Bug.png';
import envelope from '../../Images/envelope.png';
import jasmine from '../../Images/20210126_072906.jpg';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center"><h1 className="pageHead">About Me</h1></div>
                <div className="profileCover">
                    <p className="profileText boxText">Hello! My name is Jasmine Young. I am a Games Interactive Media and Mobile (GIMM) Senior at Boise State University. I work part-time as a developer for the GIMM department development team GIMM Works. I mostly work with Swift in Xcode or with C# in Unity. When I'm not coding, I'm usually reading, sewing, watching YouTube, or playing with makeup.</p>
                    <div className="profileImageBG">
                        <img className="profileImage mediumPadding" src={jasmine} alt="Jasmine Young" />
                    </div>
                </div>
                <div className="d-flex justify-content-center" id="contact"><h2 className="pageHead">Contact Me!</h2></div>
                <div className="contactGrid">
                    <a className="medPadding linkText" href="https://github.com/jasmineyoung423"><img className="contactImage" src={gitHubImage} alt="GitHub Logo" />Github: JasmineYoung423</a>
                    <a className="medPadding linkText" href="https://www.linkedin.com/in/jasmine-young-a43336195/"><img className="contactImage" src={linkedInImage} alt="LinkedIn Logo" />LinkedIn: Jasmine Young</a>
                    <a className="medPadding linkText" href="mailto:missjayoung@gmail.com"><img className="contactImage" src={envelope} alt="Envelope" />Email: missjayoung@gmail.com</a>
                </div>
            </div>
        );
    }
}

export default AboutPage;