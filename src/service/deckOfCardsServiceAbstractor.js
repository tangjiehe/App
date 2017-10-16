export const getNewCards = async (deckID, count) => {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${count}`)
    return await response.json();
}

export const getNewDeck = async () => {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    return await response.json();
}

export const reshuffleDeck = async deckID => {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`);
    return await response.json();
}