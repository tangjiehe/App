import React, { Fragment } from 'react';

const ScoreBoard = ({ dealer, player, winner, handleReshuffle }) => {

    const renderDealerScore = () => {
        return (
            dealer.isBusted ? <div>Dealer Busted!</div> : <div>Dealer Score: {Math.max(...dealer.scores)}</div>
        )
    }

    const renderPlayerScore = () => {
        return (
            player.isBusted ? <div>Player Busted!</div> : <div>Your Score: {Math.max(...player.scores)}</div>
        )
    }

    const renderReshuffleButton = () => {
        return (
            <div>
                <button className="reshuffle" onClick={handleReshuffle}>Shuffle Deck</button>
            </div>
        )
    }

    const renderBoard = () => {
        return (
            <Fragment>
                {<div style={{ 'textAlign': 'center', 'color': 'red' }}>{winner}</div>}
                {renderDealerScore()}
                {renderPlayerScore()}
                {renderReshuffleButton()}
            </Fragment>
        )
    }

    const getClassName = () => {
        return winner === '' ? 'score-board' : 'score-board slide-in';
    }

    return (
        <div className="score-board-container">
            <div className={getClassName()}>
                {winner && renderBoard()}
            </div>
        </div>
    )

}

export default ScoreBoard;