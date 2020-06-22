import React, { Fragment } from 'react';
import CardsList from '../Cards/CardsList';

const PlayerHand = ({ cards, handleHitCallBack, handleStandCallBack, isBusted, isStand, scores }) => (
    <Fragment>
        <CardsList cards={cards} />
        {!isBusted && !isStand &&
            <div className="player-control">
                <button onClick={handleHitCallBack}>Hit</button>
                <button onClick={handleStandCallBack}>Stand</button>
            </div>
        }
        <div className="name">{isBusted && <p>Busted!</p>}{!isBusted && <p>Your Score: {Math.max(...scores)}</p>}</div>
    </Fragment>
)

export default PlayerHand;