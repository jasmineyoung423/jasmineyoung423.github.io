import React from 'react';
import blockB from '../../../Images/blockBuilder.png';
import voxel from '../../../Images/voxelPlugin.png';


class BlockPage extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center"><h1 className="pageHead">Block Builder</h1></div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Technologies</h2></div>
        <div className="cardGrid">
          <div className="techContainer">
            <p className="techHead">Blueprints</p>
            <p className="techText">Blueprints were used to create all functionality in the game. The Voxel Plugin is meant to be implemented with Blueprints.</p>
            <a className="techText lightText" href="https://github.com/jasmineyoung423">GitHub Code Repository</a>
          </div>
          <div className="techContainer">
            <p className="techHead">Voxel Plugin</p>
            <p className="techText"> The free version of the Voxel Plugin was used for the game play area, adding/removing voxel cubes, and painting the added voxel cubes with custom textures.</p>
            <a className="techText lightText" href="https://voxelplugin.com/">Voxel Plugin</a>
          </div>
          <div className="techContainer">
            <p className="techHead">Textures</p>
            <p className="techText">All environment textures are tile-able and created by Bridger Parker.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center"><h2 className="techHead">Project Breakdown</h2></div>
        <div className="descriptionContainer">
          <div className="descriptionTextContainer">
            <p className="descriptionText">This block building game was inspired by the building component of Mine Craft. My group for the class this project was made for, really wanted to see if we could create this game using voxels. So I set to work figuring out what to use and how to implement it. We had about 4-6 weeks to create this game in the autumn of 2020. And I was responsible for all of the development.</p>
          </div>
          <div className="descriptionImageContainer">
            <img className="iconImage mediumPadding" src={blockB} alt="Screenshot of the Block Building game with all the different enviroment textures along the bottom." />
          </div>
        </div>
        <div className="descriptionContainer">
          <div className="descriptionImageContainer">
            <img className="iconImage mediumPadding" src={voxel} alt="Voxel Plugin Logo." />
          </div>
          <div className="descriptionTextContainer">
            <p className="descriptionText">The main function of this game is from this Voxel Plugin I found in the Unreal Engine MarketPlace. This project was a huge learning curve for me. I had never touched UE4 at this point so figuring out the editor and how to do anything took about a week of messing around with it. I spent the next three weeks trying to figure out how to use the Voxel Plugin with the limited UE4 experience I had. All of the tutorials I could find online used the paid version of the plugin, so I relied solely on the plugin documentation, and example contollers provided with the plugin.</p>
          </div>
        </div>
        <div className="descriptionContainer">
          <div className="descriptionTextContainer">
            <p className="descriptionText"> This is the final state of the game loop. You can add and remove cubes. And you can also save the world, and load it in the next time you run it.</p>
          </div>
          <div className="descriptionImageContainer">
            <iframe className="videoFrame" src="https://www.youtube.com/embed/pN8o8amO_os" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Voxel Game Demo"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockPage;