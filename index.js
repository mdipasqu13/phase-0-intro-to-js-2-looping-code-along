let newCards = [];
function writeCards(cards, string) {
  for (let i = 0; i < cards.length; i++) {
    newCards.push(`Thank you, ${cards[i]}, for the wonderful ${string} gift!`);
  }
return(newCards);
}
writeCards(cards, "birthday");
console.log(newCards);

let n = 10
function countDown(n) {
  while (n >= 0) {
    console.log(n--);
  }
};
countDown(n);