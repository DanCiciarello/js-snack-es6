/*
Richiesta:
Creare un array di oggetti.
Ogni oggetto descriverà una bici da corsa con le
seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando
destructuring e template literal.
*/

// --------------------------------------------------------- //

// Creo un array di oggetti bici
const bikeArray = [
    {
        nome: "Bianchi Infinito CV",
        peso: 10,
    },
    {
        nome: "Savadeck Herd",
        peso: 12,
    },
    {
        nome: "Savadeck Warwind3.0",
        peso: 9,
    },
    {
        nome: "NA ZGGYA",
        peso: 14,
    },
    {
        nome: "Hiland 700CC",
        peso: 20,
    },
    {
        nome: "LikeJJ",
        peso: 24,
    },
    {
        nome: "Savadeck Phantom 3.0",
        peso: 10,
    },
    {
        nome: "Savadeck Warwind 5.0",
        peso: 8,
    },
    {
        nome: "Helliot Bikes Sport 02",
        peso: 11,
    }
];


// --------------------------------------------------------- //

// Recupero gli elementi dal dom
let resultBike = document.querySelector("#resultBike");

// Creo due variabili per il nome e il peso della prima bici dell'array
let { nome, peso } = bikeArray[0];

// Creo una variabile che inizialmente avrà il valore
// del primo elemento dell'array
let lighterBike = {
    nome,
    peso,
};

console.table(lighterBike);