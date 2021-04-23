import React from 'react';
import './workspage.styles.css';
import stories from '../../Images/abcStories.png';
import philotes from '../../Images/philotes2.png';
import retail from '../../Images/retail2.png';
import swatchB from '../../Images/swatchBook2.png';
import mythText from '../../Images/mythText.png';
import blockB from '../../Images/blockBuilder.png';
import handwash from '../../Images/handWashing.png';
import { Cards } from '../../Components/card-array/cards-array.component';

class WorksPage extends React.Component {
  constructor() {
    super();
    this.state =
    {
      games: [
        {
          name: "ABC Stories",
          description: "iOS AR Handwriting App available for iPads in the Apple Appstore. Made by the GIMM Development Team 'GIMM Works' at Boise State University.",
          hasImage: true,
          image: stories,
          imageAlt: "ABC Stories App Icon",
          link: "/work/abcStories",
          id: '01'
        },
        {
          name: "Philotes' Quest",
          description: "In Development: VR Puzzle Game based on the Greek myth of Pandora's box. Made with C# in Unity. One-person project.",
          hasImage: true,
          image: philotes,
          imageAlt: "Philotes' Quest Title Screen",
          link: "/work/philotes",
          id: '03'
        },
        {
          name: "Retail Simulator",
          description: "In Development: PC Game. Made with C++/Blueprints in Unreal Engine. All functionality by me. Art/3D Models by Mikenna Fuit.",
          hasImage: true,
          image: retail,
          imageAlt: "Retail Simulator Title Screen",
          link: "/work/retail",
          id: '04'
        },
        {
          name: "Swatch Book",
          description: "Prototype of a Makeup Inventory Android App. Made with Kotlin in Android Studio. One-person project.",
          hasImage: true,
          image: swatchB,
          imageAlt: "Swatch Book App Icon",
          link: "/work/swatchbook",
          id: '05'
        },
        {
          name: "Block Builder",
          description: "A block building game made with Blueprints in Unreal Engine 4. All functionality by me. Textures by Bridger Parker.",
          hasImage: true,
          image: blockB,
          imageAlt: "Block Builder Screenshot",
          link: "/work/block",
          id: '06'
        },
        {
          name: "Hand Washing App",
          description: "An AR app to help young children with Autism to learn proper hand washing. Made with C# in Unity.",
          hasImage: true,
          image: handwash,
          imageAlt: "Hand Washing App Screenshot",
          link: "/work/handwashing",
          id: '07'
        },
        {
          name: "Myth Text Website",
          description: "A text adventure website made with HTML/JavaScript.",
          hasImage: true,
          image: mythText,
          imageAlt: "Myth Text Home Screen",
          link: "/work/mythText",
          id: '08'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center"><h2 className="pageHead">My Work</h2></div>
        <div className="mediumPadding">
          <div className="demoReelContainer">
              <iframe className="videoFrame" src="https://www.youtube.com/embed/G5ZP0pY2bU0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Philotes' Quest Demo"></iframe>
          </div>
          <Cards games={this.state.games} />
        </div>
      </div>);
  }
}

export default WorksPage;