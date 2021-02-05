import React from 'react';
import './workspage.styles.css';
import stories from '../../Images/giraffe1.jpg';
import philotes from '../../Images/panda1.jpg';
import retail from '../../Images/puppy1.jpg';
import {Cards} from '../../Components/card-array/cards-array.component';

class WorksPage extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            games: [
                { name:"ABC Stories",
                  description:"iOS AR Handwriting App available for iPads in the Apple Appstore.",
                  image:stories,
                  imageAlt:"Image",
                  link: "https://apps.apple.com/us/app/abc-stories/id1539194514",
                  id:'01'
                },
                { name:"Philotes' Quest",
                  description:"In Development: VR Puzzle Game. Made with C# in Unity. One-person project.",
                  image:philotes,
                  imageAlt:"Image",
                  link: "",
                  id:'03'
                },
                { name:"Retail Simulator",
                  description:" In Development: PC Game. Made with C++/Blueprints in Unreal Engine. All functionality by me. Art/3D Models by Mikenna Fuit.",
                  image:retail,
                  imageAlt:"Image",
                  link: "",
                  id:'04'
                }]
        };
    }

    render()
    {
        return (
        <div>
            <div className="d-flex justify-content-center"><h2 className="heading">My Work</h2></div>
            <div className="mediumPadding">
                <Cards games={this.state.games}/>
            </div>
        </div>);
    }
}

export default WorksPage;