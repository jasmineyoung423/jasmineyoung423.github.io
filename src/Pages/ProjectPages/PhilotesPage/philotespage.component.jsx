import React from 'react';

import philotes from '../../../Images/philotes2.png';

class PhilotesPage extends React.Component {
    constructor() {
        super();
        this.state =
        {
        };
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center"><h1 className="pageHead">Philotes' Quest</h1></div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
                <div className="cardGrid">
                    <div className="techContainer">
                        <p className="techHead">C#</p>
                        <p className="techText"> I am developing Philotes' Quest with C# within Unity 3D. The environment, functionality, and all models besides the collectable items and the characters, are all from the Unity Editor or from packages/assets obtained from the Unity Asset Store.</p>
                        <a className="techText lightText" href="https://github.com/jasmineaimee/Mt_Ol">GitHub Code Repository</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Oculus SDK</p>
                        <p className="techText"> The VR capability in this game runs off of the Oculus Plugin within Unity. All player functionality comes from or extends the First Person Character Rig that is available with the Oculus Asset.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Blender</p>
                        <p className="techText"> I used used Blender to model, rig, and animate the two base character models that appear in the game.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Adobe Photoshop</p>
                        <p className="techText">I used Photoshop to create the textures on all the character 3D models.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">'Philotes' Quest' Description</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={philotes} alt="Philotes' Quest Title Screen" />
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
                        <p className="descriptionText"> Progress Video (Mayhaps the 360 Sound One??)</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <iframe className="videoFrame" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Swatch Book Demo"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhilotesPage;