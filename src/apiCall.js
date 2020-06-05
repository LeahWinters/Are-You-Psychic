export const getTenCards = async () => {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=10");
    const cards = await response.json();
    // return Promise.all(cards)
    return cards;
}