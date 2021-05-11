// Snack 2

// 1. creo la funzione per generare un numero random
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.

// !! scrivo le chiavi tra virgolette in modo da poter usare più parole in una singola chiave (in questo caso "falli subiti")!!
var squadre = [
    {
        "nome": "Milan",
        "punti": 0,
        "falli subiti": 0
    },
    {
        "nome": "Napoli",
        "punti": 0,
        "falli subiti": 0
    },
    {
        "nome": "Juventus",
        "punti": 0,
        "falli subiti": 0
    },
    {
        "nome": "Inter",
        "punti": 0,
        "falli subiti": 0
    },
];

// 3. inizializzo l'array vuoto
var nomeSquadraFalliSubiti = [];


// 4. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// 4.1 Infine inseriamo nell'array vuoto creato in precedenza, solamente nomi e falli subiti. Stampiamo tutto in console.
for (var i = 0; i < squadre.length; i++) {
    var obj = {};

    squadre[i]["punti"] = numeroRandom(1, 100);
    squadre[i]["falli subiti"] = numeroRandom(1, 100);
    
    obj[0] = squadre[i]["nome"];
    obj[1] = squadre[i]["falli subiti"]
    // nomeSquadraFalliSubiti.push(squadre[i]["nome"] + ": " + squadre[i]["falli subiti"] + " falli subiti");
    nomeSquadraFalliSubiti.push(obj);
}
console.log(nomeSquadraFalliSubiti);
// console.log(squadre);
// console.log(nomeSquadraFalliSubiti);