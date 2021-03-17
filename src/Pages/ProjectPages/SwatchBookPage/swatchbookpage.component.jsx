import React from 'react';
import './swatchbookpage.styles.css';

import swatchB from '../../../Images/swatchBook2.png';
import sBWireframe from '../../../Images/sbWireFrame.png';

class SwatchBookPage extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center"><h1 className="pageHead">Swatch Book</h1></div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
                <div className="cardGrid">
                    <div className="techContainer">
                        <p className="techHead">Kotlin</p>
                        <p className="techText">I developed in Kotlin within Android Studio to build the actual prototype app. The app makes use of a custom Recycler View to automatically update the Inventory views.</p>
                        <a className="techText lightText" href="https://github.com/jasmineyoung423/MakeupInventory" rel="noopener noreferrer" target="_blank">GitHub Code Repository</a>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">SQL Lite</p>
                        <p className="techText">I used SQL Lite to store the Item (Makeup Items) Objects. This database is local to the device.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Adobe XD</p>
                        <p className="techText">I used XD to map out the app wireframe during app conception. This helped me implement app design and features during development, as I already had a clear picture of what I needed to accomplish.</p>
                    </div>
                    <div className="techContainer">
                        <p className="techHead">Adobe Illustrator</p>
                        <p className="techText">I used Illustrator to create the app icon, as I knew the scaling of the icon would need to be flexible.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">'Swatch Book - Makeup Inventory' is an app idea I came up with for an Android App Development class. This idea was born of a personal need to catalog my makeup collection, which I was, at that point, doing in a spreadsheet. Through the class, I fleshed out the idea; what I wanted to store, how I would use the app, features I would want. Then I made a wireframe in Adobe XD of what I would want the app to look like. I created the App Icon, wrote up an elevator pitch and app description. I researched potential competitor apps. And also made a MVP of the basic app functionality. All in the hectic spring of 2020.</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={swatchB} alt="Swatch Book App Icon" />
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionImageContainer">
                        <img className="iconImage mediumPadding" src={sBWireframe} alt="Three app wireframe pages showing Home, Add, and Details page mockup." />
                    </div>
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">I made 3 wireframe pages in Adobe XD while conceptualizing Swatch Book. Shown here is the Inventory Page, Add/Edit Page, and the Details Page. I wanted something that made sense logically to input data, while also being nice to look at.</p>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionTextContainer">
                        <p className="descriptionText">I developed the basic app with Kotlin in Android Studio. Here is a quick video I made for the class to show the app built to and working on my phone. (Unfortunately, the video has no sound. I would suggest playing it on 1.5x speed, as video editing does not come as naturally to me as coding does.)</p>
                    </div>
                    <div className="descriptionImageContainer">
                        <iframe className="videoFrame" src="https://www.youtube.com/embed/7mieEzbbBW4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Swatch Book Demo"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default SwatchBookPage;