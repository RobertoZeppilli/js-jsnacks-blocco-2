// Snack 3

// 1. Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
function intervalArray(arr, a, b) {

    for (var i = 0; i < arr.length; i++) {
        var newArray = arr.slice(a + 1, b);
    };
    return newArray;
};

// 2. La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri (inclusi).
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Array originale", array);
var nuovoArray = intervalArray(array, 5, 10);
console.log("Array tagliato", nuovoArray);