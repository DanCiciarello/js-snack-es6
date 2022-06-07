/*
Richiesta:
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione
compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

// --------------------------------------------------------- //

// Creo l'array
const myArray = [
    "Michele",
    "Fabio",
    "Roberto",
    "Giovanni",
    "Simone",
    "Chiara"
];

// Creo i valori min e max
const numMin = 2;
const numMax = 4;

// Creo un array vuoto
let arrayForEach = [];

// Creo un nuovo array con forEach
myArray.forEach((element, i) => {

    // Controllo se l'elemento attuale è compreso tra min e max
    if (i >= numMin && i <= numMax) {

        // Pusho l'elemento nel nuovo array se compreso
        arrayForEach.push(element);

    };

});

console.log("------ Array forEach ------");
console.log(arrayForEach);

// --------------------------------------------------------- //

// Creo un nuovo array con Filter
const arrayFilter = myArray.filter((element, i) => {

    if (i >= numMin && i <= numMax) {
        return true;
    } else {
        return false;
    };

});

console.log("------ Array Filter ------");
console.log(arrayFilter);