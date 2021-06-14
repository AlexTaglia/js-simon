/*
Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
indovinare sono stati individuati.
*/

// Creare funzione numeri random 
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creo il mio array e ci pusho dentro x numeri random
var numQty = 5;
var randomArray = [];

while (randomArray.length < numQty) {
    var randomNum = getRandomNum(1, 100);
    
    if (!randomArray.includes(randomNum)) {
        randomArray.push(randomNum);
    }
}

// visualizzare in un alert() i x numeri che ho nell'array
alert(randomArray);
console.log('Numeri random', randomArray)

// Dopo 30 secondi
// Chiedo all'utente x numeri con while
// Se sono contenuti nell'array dei numeri random "randomArray" li pusho in un altrto array come risultato "result"
// 

var timerMs = 1 * 1000;
var userArray = [];
var result = []

setTimeout(function () {
    while (userArray.length < numQty) {
        var inputUser = parseInt(prompt('inserisci un numero'));
        userArray.push(inputUser);
        
        if (randomArray.includes(inputUser)) {
            result.push(inputUser);
        }
        
    }
    console.log('Numeri azzaccati', result);
    console.log('Numeri inseriti dall\'utente', userArray)
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
    // indovinare sono stati individuati
    alert('il tuo punteggio è ' + result.length + '/' + numQty + ' hai azzeccatoi i numeri ' + result)
}, timerMs)






