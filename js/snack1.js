// Snack 1
// 1. funzione per stabilire quale sia la chiave con il minor valore all'interno di un array di oggetti
function peso(arr, key) {
    var biciLeggera = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] < biciLeggera[key]) {
            biciLeggera = biciDaCorsa[i];
        }
    }
    return biciLeggera;
}
// 2. Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var biciDaCorsa = [
    {
        nome: "Atala",
        peso: 40
    },
    {
        nome: "Bianchi",
        peso: 10
    },
    {
        nome: "Trek",
        peso: 30
    },
    {
        nome: "Paco",
        peso: 15
    },
]
console.log(biciDaCorsa);

// // Stampare a schermo la bici con peso minore.
var biciPiuLeggera = peso(biciDaCorsa, "peso");
console.log(biciPiuLeggera);
