import React from 'react';
import './card.styles.css'
import { Link } from 'react-router-dom';

export const Card = props =>
(
    <div className="cardContainer centering">
        <Link className="lightText centering" to={props.game.link}>
            <img className="cardImage" src={props.game.image} alt={props.game.image}/>
            <h2 className="heading">{props.game.name}</h2>
            <p className="readingText">{props.game.description}</p>
        </Link>
    </div>
);