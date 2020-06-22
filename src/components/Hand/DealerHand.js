import React, { Fragment } from 'react';
import CardsList from '../Cards/CardsList';

const DealerHand = ({ cards, isBusted, scores, winner }) => (
    <Fragment>
        <div className="name"><p className="dealer">Dealer {isBusted && <span>Busted!</span>}{winner && !isBusted && <span>Score: {Math.max(...scores)}</span>}</p></div>
        <CardsList className="Dealer" cards={cards} />
    </Fragment>
)

export default DealerHand;