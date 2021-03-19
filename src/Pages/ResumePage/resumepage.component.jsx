import React from 'react';
import './resumepage.styles.css';

class ResumePage extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center"><h1 className="pageHead">Jasmine Young</h1></div>
                <div className="resumeGrid lightText">
                <div className="resumeColumns">
                        <h2 className="mainHeading">Experience</h2>
                        <div className="resumeBlock">
                            <div >
                                <h3 className="subHeading">GIMM Dev Team Developer ( iOS )
                                    <p className="readText float-right">January 2020 - Current</p>
                                </h3>
                                <p className="subText">Boise State University GIMM Department</p>
                                <ul className="readText">
                                    <li>Use Swift to develop both standard and AR apps</li>
                                    <li>Work with other developers and an art team to create a full and cohesive app.</li>
                                    <li>Use ARKit and SceneKit to create and modify AR experiences with 3D models and audio files.</li>
                                    <li>Implement the  RealmSwift Cocoapod to locally store user data.</li>
                                    <li>Used Xcode Instruments to debug an app and reduce memory consumption by over 50%.</li>
                                    <li>Collaborated with educators and occupational therapists to create a fun and educational experience for kids.</li>
                                    <li>Teamed up with another developer to establish the app connection with an external database (MongoDB).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="subHeading">GIMM Peer Mentor
                                    <p className="readText float-right">August 2018/2019 - December 2018/2019</p>
                                </h3>
                                <p className="subText">Boise State University GIMM Department</p>
                                <ul className="readText">
                                    <li>Advised junior developers on how to debug and structure their code.</li>
                                    <li>Collaborated with other developers to create and debug programs and features.</li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="mainHeading">Education</h2>
                        <div className="resumeBlock">
                            <div>
                                <h3 className="subHeading">Bachelor of Science in Games Interactive Media and Mobile (GIMM)</h3>
                                <p className="subText">- College of Innovation and Design at Boise State Univeristy - Boise, Idaho (May 2021)</p>
                                <p className="readText">The GIMM major focuses on teaching students front-end development and design, with an emphasis on games and mobile apps using AR and VR technology.</p>
                            </div>
                            <div>
                                <h3 className="subHeading">Minor in Computer Science (CS)</h3>
                                <p className="subText">- College of Engineering at Boise State Univeristy - Boise, Idaho (May 2021)</p>
                                <p className="readText">The CS minor teaches the fundamentals of OOP principles, algorithm analysis, and data structures.</p>
                            </div>
                            </div>
                    </div>
                    <div className="resumeColumns">
                        <h2 className="mainHeading">Skills</h2>
                        <div className="readText">
                            <p>Swift / SwiftUI</p>
                            <p>ARKit / SceneKit</p>
                            <p>CoreData / RealmSwift / Firebase</p>
                            <p>Agile / Scrum</p>
                            <p>Git / GitHub</p>
                            <p>C# / Unity 3D</p>
                            <p>React / JavaScript</p>
                            <p>OOP/SOLOD Principles</p>
                            <p>REST API’s</p>
                            <p>MVC/MVVM</p>
                            <p>Knowledge of Blender / Maya / 3D Modelling</p>
                            <p>UX Principles</p>
                            <p>Mobile Development</p>
                        </div>
                        </div>
                </div>
                <div className="buttonContainer">
                <div className="buttonBox">
                    <a className="linkHeading" href="https://docs.google.com/file/d/1tmPex23Zwi9BEw1FzQI3ll45vEfdgWzk8Hil1yod4YA/edit" rel="noopener noreferrer" target="_blank">Downloadable Resume</a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ResumePage;