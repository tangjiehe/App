import {cardMappings} from './cardMappings';

export function getScores(cards) {
    const newScores = new Set();
    getAllPossibleScores(cards, 0, newScores, 0);
    return newScores;
}

export function updateState(state, newCards) {
    const cards = [...state.cards, ...newCards];
    const scores = getScores(cards);
    const isBusted = scores.size === 0;
    return { cards, isBusted, scores };
}

function getAllPossibleScores(cards, index, score, cur) {
    if (cur > 21) {
        return;
    }
    if (index === cards.length) {
        score.add(cur);
        return;
    }
    const card = cards[index];
    const cardValue = cardMappings[card.value] || +card.value;
    if (Array.isArray(cardValue)) {
        for (let num of cardValue) {
            getAllPossibleScores(cards, index + 1, score, cur + num);
        }
    } else {
        getAllPossibleScores(cards, index + 1, score, cur + cardValue);
    }
}
