import React from 'react';
import philotes from '../../../Images/philotes2.png';
import hera from '../../../Images/heraSS.png';

class PhilotesPage extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center"><h1 className="pageHead">Philotes' Quest</h1></div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
                <div className="cardGrid">
                    <div className="techContainer">
                        <p className="techHead">C#</p>
                        <p className="techText">I am developing Philotes' Quest with C# within Unity 3D. The environment, functionality, and all models besides the collectable items and the characters, are all from the Unity Editor or from packages/assets obtained from the Unity Asset Store.</p>
                        <a className="techText lightText" href="https://github.com/jasmineaimee/Mt_Ol">GitHub Code Repository</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Oculus SDK</p>
                        <p className="techText">The VR capability in this game runs off of the Oculus Plugin within Unity. All player functionality comes from or extends the First-Person Character Rig that is available with the Oculus Asset.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Blender</p>
                        <p className="techText">I used Blender to model, rig, and animate the two base character models that appear in the game. I also used Blender to model the collectables. Except for Pandora's box, I modeled, rigged, and animated that in Maya.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Adobe Photoshop</p>
                        <p className="techText">I used Photoshop to create the textures on all the character and collectable 3D models.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">"Philotes' Quest" is going to be a puzzle VR game. You play as Philotes (who is mythology is the goddess of friendship), and you go around 'Mount Olympus' helping some other gods and goddesses by completing puzzles and riddles, with the goal of creating Pandora and the box. In it's original conception, I had planned for the player to have to build relationships with the other gods and that would affect your ability to complete the myth, the skills you have, etc. However, with the time constraints I have for a complete demo in April 2021, that feature will be something I will have to revisit at a later time.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={philotes} alt="Philotes' Quest Title Screen" />
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={hera} alt="Screenshot of a 3D low-poly model of a black woman in a gold dress against a teal wall. The word Ready is on the wall." />
                    </div>
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">The gods and godesses are all complete and textured now. This is Hera. And I've added some colour to the environment, as well as adjusted the lighting. There are also now a few puzzles and mazes added to some of the gods/goddesses in place of the riddles on the wall.</p>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText"> This is a progress video from April 2020. The video was taken for a sound design class, so that is the focus of this clip. But this shows basic functionality and play area layout. A lot has been changed and added since last year, but this is the most recent video I have.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <iframe className="videoFrame" src="https://www.youtube.com/embed/xAPBglrECRg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Philotes' Quest Demo"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhilotesPage;