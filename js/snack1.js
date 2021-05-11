// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var biciDaCorsa = [
    {
        nome: "Atala",
        peso: 30
    },
    {
        nome: "Bianchi",
        peso: 12
    },
    {
        nome: "Trek",
        peso: 2
    },
    {
        nome: "Paco",
        peso: 18
    },
]
console.log(biciDaCorsa);

// inizializzare una variabile biciLeggera per poi comparare nel ciclo for quale peso sia il minore tra tutti
var biciLeggera = biciDaCorsa[0];

// // Stampare a schermo la bici con peso minore.
for (var i = 0; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = biciDaCorsa[i];
    }
}

console.log(biciLeggera);