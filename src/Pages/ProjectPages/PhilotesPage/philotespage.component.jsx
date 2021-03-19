import React from 'react';
import philotes from '../../../Images/philotes2.png';
import hera from '../../../Images/heraSS.png';

class PhilotesPage extends React.Component {
    render() {
        return (
            <div>
                <div className="topDescriptionBlock">
                    <h1 className="pageHead">Philotes' Quest</h1>
                    <p className = "descriptionText">"Philotes' Quest" is a puzzle VR game. You play as Philotes, who is the goddess of friendship, and you go around 'Mount Olympus' helping some other gods and goddesses by completing puzzles and riddles, with the goal of creating Pandora and Pandora's box. </p>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
                <div className="cardGrid">
                    <div className="techContainer">
                        <p className="techHead">C#</p>
                        <p className="techText">I am developing Philotes' Quest with C# within Unity 3D. And utilizing the Unity asset store to fill out the space with room decoration</p>
                        <a className="techText lightText" href="https://github.com/jasmineaimee/Mt_Ol" rel="noopener noreferrer" target="_blank">View Code on GitHub!</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Oculus SDK</p>
                        <p className="techText">The VR capability in this game runs off of the Oculus Plugin within Unity.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Blender</p>
                        <p className="techText">I used Blender to model, rig, and animate the two base character models and interactable items.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Adobe Photoshop</p>
                        <p className="techText">I used Photoshop to create the textures on all the character and collectable 3D models.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">In it's original conception, I had planned for the player to have to build relationships with the other gods and that would affect your ability to complete the myth, the skills you have, etc. <br></br><br></br> However, through development over the last two years, while still in school, and a deadline of April 2021, I had to narrow focus to one myth, and will revisit relationships and additional content at a later time.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={philotes} alt="Philotes' Quest Title Screen" />
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionImageContainer">
                        <iframe className="videoFrame" src="https://www.youtube.com/embed/xAPBglrECRg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Philotes' Quest Demo"></iframe>
                    </div>
                    <div className="descriptionTextContainer">
                        <p className="descriptionText"> This is a progress video from April 2020. The video was taken for a sound design class, so that is the focus of this clip. But this shows basic functionality and play area layout. A lot has been changed and added since last year, but this is the most recent video I have.</p>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">The demo game is now complete. This is Hera's room. When you go to see her, she tasks you with completing a maze. And then when you return, the collectable item is in the chest to her left.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={hera} alt="Screenshot of a 3D low-poly model of a black woman in a gold dress against a teal wall. The word Ready is on the wall." />
                    </div>
                </div>
            </div>
        );
    }
}

export default PhilotesPage;