/*
Richiesta:
Dato un elenco degli studenti di una facoltà,
con il totale dei loro voti
let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 },
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
];

1- Dobbiamo creare delle targhe con il loro nome in maiuscolo.
Ci serve quindi un nuovo array di stringhe.
Ogni elemento del nuovo array sarà il nome dello studente
ma con tutte le lettere maiuscole.

2-  Dobbiamo creare un nuovo array con gli studenti
che hanno un totale di voti superiore a 70.

3-  Dobbiamo creare un nuovo array di tutti gli studenti
che hanno un totale di voti superiore a 70 e id superiore a 120.

*/

// --------------------------------------------------------- //

// Dichiaro l'array degli studenti
let students = [
    {
        name: "Marco",
        id: 213,
        grades: 78,
    },
    {
        name: "Paola",
        id: 110,
        grades: 96,
    },
    {
        name: "Andrea",
        id: 250,
        grades: 48,
    },
    {
        name: "Gaia",
        id: 145,
        grades: 74,
    },
    {
        name: "Luigi",
        id: 196,
        grades: 68,
    },
    {
        name: "Piero",
        id: 102,
        grades: 50,
    },
    {
        name: "Francesca", 
        id: 120,
        grades: 84,
    },
];

// --------------------------------------------------------- //

// Dichiaro un nuovo array
let arrayUppercase = [];

// Uso forEach per trasformare i nomi in maiuscolo
students.forEach((element, i) => {

    // Registro in una variabile il nome dello studente
    let studentName = element.name;

    // Lo trasformo in maiuscolo
    let studentNameUppercase = studentName.toUpperCase();

    // Lo aggiungo all'array
    arrayUppercase.push(studentNameUppercase);

});

// Stampo a console il risultato
console.log("------ 1. Uppercase ------");
console.log(arrayUppercase);

// --------------------------------------------------------- //

// Creo un nuovo array per conservare i risultati
let arrayGrades = [];

// Filtro gli studenti che hanno un voto superiore a 70 con forEach
students.forEach((element, i) => {

    // Controllo se ha un voto superiore a 70
    if (element.grades >= 70) {

        // Lo aggiungo all'array
        arrayGrades.push(element);

    }

});

// Stampo a console il risultato
console.log("------ 2. Filter by grades ------");
console.log(arrayGrades);

// --------------------------------------------------------- //

// Creo un nuovo array per conservare i risultati
let arrayGradesId = [];

// Filtro gli studenti con voto superiore a 70 e id superiore a 120 con Filter
students.filter((element, id) => {

    // Controllo se ha un voto superiore a 70 e un id superiore a 120
    if (element.grades >= 70 && element.id >= 120) {

        // Lo aggiungo all'array
        arrayGradesId.push(element);

    }

});

// Stampo a console il risultato
console.log("------ 3. Filter by grades and id ------");
console.log(arrayGradesId);

// --------------------------------------------------------- //