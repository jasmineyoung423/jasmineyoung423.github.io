import React from 'react';
import stories from '../../../Images/abcStories.png';
import puzzle from '../../../Images/puzzleABC.png';
import imitate from '../../../Images/imitateABC.png';
import free from '../../../Images/freeABC.png';

class ABCStoriesPage extends React.Component {
    render() {
        return (
            <div>
                <div className="topDescriptionBlock">
                    <h1 className="pageHead">ABC Stories</h1>
                    <p className = "descriptionText">'ABC Stories' is an AR Handwriting iOS app, that is designed to teach children to write the Roman Alphabet through games and stories.</p>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
                <div className="cardGrid">
                    <div className="techContainer">
                        <p className="techHead">Swift</p>
                        <p className="techText">I helped develop ABC Stories with Swift in Xcode. </p>
                        <a className="techText lightText" href="https://apps.apple.com/us/app/abc-stories/id1539194514" rel="noopener noreferrer" target="_blank">App in Apple App Store</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">React</p>
                        <p className="techText">I developed a lot of the front-end of the companion website to the ABC Stories app.</p>
                        <a className="techText lightText" href="https://abcgoapp.org" rel="noopener noreferrer" target="_blank">ABC Go Companion Website</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">GitHub</p>
                        <p className="techText">This was a large project for the GIMM Works team, GitHub was instrumental in allowing the development and art teams to complete this project.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText"> The ABC Stories GIMM Works team worked with teachers and occupational therapists to create a curriculum that follows the way it is currently taught to students.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={stories} alt="ABC Stories App Icon" />
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionImageContainer">
                        <iframe className="videoFrame" src="https://www.youtube.com/embed/f6TUAltSobQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="ABC Stories Tutorial"></iframe>
                    </div>
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">Here is the tutorial from GIMM Works. This video shows the whole app in action. Including the AR portions!</p>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">Letter Imitation was really fun to make. I spent a lot of time learning how to be able to play the gif once, have it freeze on the last frame, and replay on command. Once that was working, I figured out how to take a snapshot of just the CanvasView (the view that you can write on), and send the image to the database when the user presses Done.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={imitate} alt="Screenshot of an iPad screen showing the letter H on the left. Someone has drawn H on the right." />
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={puzzle} alt="Screenshot of an iPad screen showing the letter H on the top a puzzle missing pieces in the middle, and an assortment of letters on the bottom." />
                    </div>
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">We wanted a way to help students with letter identification and matching in addition to the letter matching part of the app. So the art team got to work creating a picture based off of each chapter of the AR stories. And I got to work learning how to use UIBezierPaths to create a custom mask layer on the UIImageView.</p>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">Free Write, by far, needed the most attention of anything I worked on in this project. I started development of this part with changing the background image of the 'paper' on the press of a button. The yellow paper was given to the team by the teachers we worked with. And I made the college ruled paper in photoshop. The part of this section that took a lot of my attention was changing the pen size. <br></br><br></br>I ran into issues such as: <ul><li>every line changing size when a size button was pressed</li><li>Only the first and last dot in a line changing size</li><li>The last dot in a line changing size when a size button was pressed</li></ul> It took a lot of debugging to figure out where in the multiple files being used these bugs were stemming from.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={free} alt="Screenshot of an iPad screen showing a place to write along with paper and pen options. Someone has written Hello." />
                    </div>
                </div>
            </div>
        );
    }
}

export default ABCStoriesPage;