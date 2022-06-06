/*
Richiesta:
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare,
le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array
i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console.
*/

// --------------------------------------------------------- //

// Creo un array di oggetti di squadre di calcio
let footballTeams = [
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Empoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Genoa",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Salernitana",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Sassuolo",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Spezia",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Torino",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Udinese",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Venezia",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Verona",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

console.log("------ Situazione iniziale ------");
console.table(footballTeams);


// --------------------------------------------------------- //

// Creo un ciclo per assegnare un numero random a punti e falli
for (let i = 0; i < footballTeams.length; i++) {

    // Creo una variabile per l'oggetto attuale
    let team = footballTeams[i];

    // Creo un numero random per i punti e i falli
    let puntiRandom = Math.floor(Math.random() * 114);
    let falliRandom = Math.floor(Math.random() * 1000);

    // Assegno i nuovi valori all'oggetto attuale
    team.puntiFatti = puntiRandom;
    team.falliSubiti = falliRandom;

};

console.log("------ Situazione con numeri random ------");
console.table(footballTeams);

// --------------------------------------------------------- //

// Creo un nuovo array vuoto
let footballTeamsNew = [];

// Creo un ciclo per creare i nuovi oggetti
for (let i = 0; i < footballTeams.length; i++) {

    // Creo una variabile per gli argomenti di interesse
    let { nome, falliSubiti } = footballTeams[i];

    // Creo un nuovo oggetto con gli argomenti di interesse
    let newObject = {
        nome: nome,
        falliSubiti: falliSubiti,
    };
    
    // Aggiungo il nuovo oggetto al nuovo array
    footballTeamsNew.push(newObject);

};

console.log("------ Situazione con nuovi oggetti ------");
console.table(footballTeamsNew);

// --------------------------------------------------------- //