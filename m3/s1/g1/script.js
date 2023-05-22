console.log('hello');
var player1 = 3;
var player2 = 89;
var n = Math.floor(Math.random() * (100 - 1) + 1);
console.log(n);
var player1Diff = Math.abs(player1 - n);
var player2Diff = Math.abs(player2 - n);
if (player1 === n) {
    console.log('Player 1 the win');
}
else if (player2 === n) {
    console.log('Player 2 the win');
}
else if (player1Diff < player2Diff) {
    console.log('Player 1 the win');
}
else if (player1Diff > player2Diff) {
    console.log('Player 2 the win');
}
