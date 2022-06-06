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

// Creo un oggetto che inizialmente avrà il valore
// del primo oggetto dell'array
let lighterBike = {
    nome,
    peso,
};

// Ciclo tutti gli elementi dell'array a partire dal secondo
// per determinare la bici più leggera

for (i = 1; i < bikeArray.length; i++) {

    // Creo due variabili per nome e peso della bici attuale
    let { nome, peso } = bikeArray[i];

    // Se il peso della bici attuale è minore,
    // sovrascrive i dati
    if (peso < lighterBike.peso) {
        lighterBike = {
            nome,
            peso,
        };
    };
};

// Stampo la bici più leggera in pagina
resultBike.innerHTML = `La bici più leggera è <strong>${lighterBike.nome}</strong>, con il peso di <strong>${lighterBike.peso}kg</strong>.`