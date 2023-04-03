var numero = 30
if(numero == 300){
    console.log('Risposta esatta')
}else if (numero < 300){
    console.log('Risposta sbagliata')
}else if (numero > 300) {
    console.log('Risposta sbagliata')
}

var numero = prompt ('Indovina il numero')
if( numero == 30){
    document.write('<br>Risposta esatta')
}else if ( numero > 30){
    document.write('<br>Risposta sbagliata')
}else if ( numero < 30){
    document.write ('<br>Risposta sbagliata')
}

var città = 'Roma'
var nazione = 'Italy'
var continente = 'Europa'
console.log(continente)
console.log(nazione)
console.log(città)

document.getElementById('secondtext').innerHTML='Questa è un esercitazione'