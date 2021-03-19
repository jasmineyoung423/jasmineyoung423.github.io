import React from 'react';
import './swatchbookpage.styles.css';

import swatchB from '../../../Images/swatchBook2.png';
import sBWireframe from '../../../Images/sbWireFrame.png';

class SwatchBookPage extends React.Component {
    render() {
        return (
            <div>
                <div className="topDescriptionBlock">
                    <h1 className="pageHead">Swatch Book</h1>
                    <p className = "descriptionText">'Swatch Book - Makeup Inventory' is an app idea I came up with for an Android App Development class. This idea was born of a personal need to catalog my makeup collection</p>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
                <div className="cardGrid">
                    <div className="techContainer">
                        <p className="techHead">Kotlin</p>
                        <p className="techText">I developed in Kotlin within Android Studio to build the actual prototype app.</p>
                        <a className="techText lightText" href="https://github.com/jasmineyoung423/MakeupInventory" rel="noopener noreferrer" target="_blank">View Code on GitHub!</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">SQL Lite</p>
                        <p className="techText">I used SQL Lite to store the Item (Makeup Items) Objects. This database is local to the device.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Adobe XD</p>
                        <p className="techText">I used XD to map out the app wireframe during app conception. </p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Adobe Illustrator</p>
                        <p className="techText">I used Illustrator to create the app icon, as I knew the scaling of the icon would need to be flexible.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">Through the class, I fleshed out the idea; what I wanted to store, how I would use the app, features I would want. Then I made a wireframe in Adobe XD of what I would want the app to look like. I created the App Icon, wrote up an elevator pitch and app description. I researched potential competitor apps. And also made a MVP of the basic app functionality. All in the hectic spring of 2020.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={swatchB} alt="Swatch Book App Icon" />
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionImageContainer">
                        <iframe className="videoFrame" src="https://www.youtube.com/embed/7mieEzbbBW4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Swatch Book Demo"></iframe>
                    </div>
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">I developed the basic app with Kotlin in Android Studio. Here is a quick video I made for the class to show the app built to and working on my phone. (Unfortunately, the video has no sound. I would suggest playing it on 1.5x speed, as video editing does not come as naturally to me as coding does.)</p>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">I made 3 wireframe pages in Adobe XD while conceptualizing Swatch Book. Shown here is the Inventory Page, Add/Edit Page, and the Details Page. I wanted something that made sense logically to input data, while also being nice to look at.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={sBWireframe} alt="Three app wireframe pages showing Home, Add, and Details page mockup." />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SwatchBookPage;