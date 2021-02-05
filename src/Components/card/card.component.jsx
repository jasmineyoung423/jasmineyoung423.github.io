import React from 'react';
import './card.styles.css'

export const Card = props =>
(
    <div className="cardContainer centering">
        <a className="lightText centering" href="#stillInDevelopment">
            <img className="cardImage" src={props.game.image} alt={props.game.image}/>
            <h2 className="heading">{props.game.name}</h2>
            <p className="readingText">{props.game.description}</p>
        </a>
    </div>
);