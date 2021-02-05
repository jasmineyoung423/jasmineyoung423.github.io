import React from 'react';
import './cards-array.styles.css';

import {Card} from '../card/card.component';

export const Cards = props => (
    <div className="cardGrid">
        {props.games.map(game => (<Card key={game.id} game={game}/>))}
    </div>
);