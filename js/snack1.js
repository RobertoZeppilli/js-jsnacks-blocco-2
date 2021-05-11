// Snack 1

// 1. funzione per ottenere un dato da un array di oggetti, passando come argomenti l'array e due chiavi
function pesoMinore(arr, key1, key2) {
    for (var i = 0; i < arr.length; i++) {

        var pesoMinore = "Nome: " + arr[i][key1] + " / " + "Peso: " + Math.min(arr[i][key2]);
    }
    return pesoMinore;
}

// 2. creo l'array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var biciDaCorsa = [
    {
        nome: "Atala",
        peso: 30
    },
    {
        nome: "Bianchi",
        peso: 25
    },
    {
        nome: "Trek",
        peso: 60
    },
    {
        nome: "Paco",
        peso: 18
    },
]
console.log(biciDaCorsa);

// --------------------SOLUZIONE SENZA LA FUNZIONE------------------
// 3. ciclo l'array per ottenere l'oggetto che abbia la chiave "peso" minore tra tutte grazie a Math.min()
// for (var i = 0; i < biciDaCorsa.length; i++) {

//     var pesoMinore = biciDaCorsa[i].nome + " " + Math.min(biciDaCorsa[i].peso);
// }
// console.log(biciLeggera);
// console.log("La bici che pesa di meno è questa: " + pesoMinore);
// --------------------SOLUZIONE SENZA LA FUNZIONE------------------

// --------------------SOLUZIONE CON LA FUNZIONE------------------
// Stampare a schermo la bici con peso minore.
var biciLeggera = pesoMinore(biciDaCorsa, "nome", "peso");
console.log(biciLeggera);
// --------------------SOLUZIONE CON LA FUNZIONE------------------