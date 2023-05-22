console.log('hello');

let player1: number = 35;
let player2: number = 89;

let n: number = Math.floor(Math.random() * (100-1) + 1);
console.log(n);

let player1Diff: number = Math.abs(player1 - n );
let player2Diff: number = Math.abs(player2 - n);

if(player1 === n){
    console.log('Player 1 the win');   
}else if(player2 === n) {
    console.log('Player 2 the win');   
}else if ( player1Diff < player2Diff){
    console.log('Player 1 the win');
}else if ( player1Diff > player2Diff){
    console.log('Player 2 the win');   
}


