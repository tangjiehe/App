import React, { Fragment, useState, useEffect } from 'react';
import DealerHand from '../../components/Hand/DealerHand';
import PlayerHand from '../../components/Hand/PlayerHand';
import Modal from '../../components/Modal/Modal';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import Loader from '../../components/Loader/Loader';
import { getLocalStorage, setLocalStorage } from '../../util/localStorageManagement';
import { getNewCards, getNewDeck, reshuffleDeck } from '../../service/deckOfCardsServiceAbstractor';
import { updateState } from '../../util/updateState';
import '../../styles/Blackjack.scss';

function Game() {
    const [isLoading, setIsLoading] = useState(true);
    const [deckID, setDeckID] = useState('');
    const [winner, setWinner] = useState('');
    const [player, setPlayer] = useState({ cards: [], isBusted: false, scores: new Set() });
    const [dealer, setDealer] = useState({ cards: [], isBusted: false, scores: new Set() });

    useEffect(initializeDeck, [])
    useEffect(initializeCards, [deckID])
    useEffect(handleDealerStrategy, [dealer, player])

    function getWinner() {
        const dealerScore = Math.max(...dealer.scores);
        const playerScore = Math.max(...player.scores);
        if ((dealer.isBusted && player.isBusted) || (dealerScore === playerScore)) {
            setWinner('Tied');
        } else if (dealerScore > playerScore) {
            setWinner('Dealer wins!');
        } else {
            setWinner('You win!');
        }
    }

    function handleDealerStrategy() {
        const { isBusted, isStand } = player;
        if ((isBusted || isStand) && (Math.max(...dealer.scores) <= 16 && !dealer.isBusted)) {
            getNewCards(deckID, 1)
                .then(res => setDealer(prevState => updateState(prevState, res.cards)));
        } else if (isBusted || isStand) {
            document.getElementsByClassName('list-item')[0].style.filter = 'contrast(1)';
            getWinner();
        }
    }

    function initializeDeck() {
        const deck_id_from_storage = getLocalStorage('deck_id');
        if (deck_id_from_storage) {
            reshuffleDeck(deck_id_from_storage)
                .then(() => setDeckID(deck_id_from_storage));
        } else {
            getNewDeck().then(res => { setDeckID(res.deck_id); setLocalStorage({ key: 'deck_id', value: res.deck_id }) })
        }
        return () => reshuffleDeck(deck_id_from_storage);
    }

    function handlePlayerDrawCard() {
        getNewCards(deckID, 1)
            .then(res => setPlayer(prevState => updateState(prevState, res.cards)));
    }

    function handleSetPlayerStand() {
        setPlayer(prevState => { return { ...prevState, isStand: true } });
    }

    function handleReshuffle() {
        const defaultState = { cards: [], isBusted: false, scores: new Set() };
        setIsLoading(true);
        reshuffleDeck(deckID)
            .then(() => {
                setWinner('');
                setPlayer(defaultState);
                setDealer(defaultState);
                initializeCards();
            })
    }

    function initializeCards() {
        if (!deckID) {
            return;
        }
        Promise.all([getNewCards(deckID, 2), getNewCards(deckID, 2)])
            .then(res => {
                setDealer(prevState => updateState(prevState, res[0].cards));
                setPlayer(prevState => updateState(prevState, res[1].cards));
                setIsLoading(false);
            })
    }

    function getScoreBoard() {
        return (
            <ScoreBoard dealer={dealer} player={player} winner={winner} handleReshuffle={handleReshuffle} />
        )
    }

    return (
        <Fragment>
            <div className="blackjackgame">
                {
                    isLoading ?
                        <Loader /> :
                        <Fragment>
                            <Modal isOpen={winner} childComponent={getScoreBoard()} />
                            <DealerHand {...dealer} winner={winner} />
                            <PlayerHand {...player} handleHitCallBack={handlePlayerDrawCard} handleStandCallBack={handleSetPlayerStand} />
                        </Fragment>
                }
            </div>
        </Fragment >
    )
}

export default Game;