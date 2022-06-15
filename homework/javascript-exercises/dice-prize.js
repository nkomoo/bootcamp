/* In the game Dice Prize, you throw two dice:
If you throw two sixes you win a top prize: a bear
If you throw a double number, other than a six, you win three free throws
If you throw an even number, you win one free throw
If you throw any other combination, you lose the game

1. Use Math.random, if, else, else if and template literals to create the game and console log what the player wins or whether they lose
2. Start by writing a flow chart on paper to plan out your code
3. If you finish early, you can incorporate alert and prompt into the game */

let dice = Math.floor(Math.random() *6) +1;
let dice2 = Math.floor(Math.random() *6) +1;

if (dice === 6 && dice2 === 6) {
console.log ('You won a top prize!')
}
else if (dice === dice 2) {
console.log ('You win three free throws!)
}
else if ((dice + dice2) %2 === 0) {
console.log ('You win one free throw!)
}
else {
console.log ('You lose the game')}

console.log(`You threw ${dice} and ${dice2}`)
