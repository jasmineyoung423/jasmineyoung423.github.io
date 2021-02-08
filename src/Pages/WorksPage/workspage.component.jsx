import React from 'react';
import './workspage.styles.css';
import stories from '../../Images/abcStories.png';
import philotes from '../../Images/philotes2.png';
import retail from '../../Images/retail2.png';
import swatchB from '../../Images/swatchBook2.png';
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
                  description:"iOS AR Handwriting App available for iPads in the Apple Appstore. Made by the GIMM Development Team at Boise State University.",
                  image:stories,
                  imageAlt:"Image",
                  link: "https://apps.apple.com/us/app/abc-stories/id1539194514",
                  id:'01'
                },
                { name:"Philotes' Quest",
                  description:"In Development: VR Puzzle Game based on the Greek myth of Pandora's box. Made with C# in Unity. One-person project.",
                  image:philotes,
                  imageAlt:"Image",
                  link: "/work",
                  id:'03'
                },
                { name:"Retail Simulator",
                  description:" In Development: PC Game. Made with C++/Blueprints in Unreal Engine. All functionality by me. Art/3D Models by Mikenna Fuit.",
                  image:retail,
                  imageAlt:"Image",
                  link: "/work",
                  id:'04'
                },
                { name:"Swatch Book",
                  description:"Prototype of a Makeup Inventory Android App. Made with Kotlin in Android Studio. One-person project.",
                  image:swatchB,
                  imageAlt:"Image",
                  link: "/works/swatchbook",
                  id:'05'
                }
              ]
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