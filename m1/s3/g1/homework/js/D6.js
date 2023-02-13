/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2;
}
console.log(area(10, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numero1, numero2) {
    if (numero1 === numero2) {
        return (numero1 + numero2) * 3;
    } else {
        return numero1 + numero2;
    }
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    if (numero > 19) {
        return (numero - 19) * 3;
    } else {
        return 19 - numero;
    }
}
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}
console.log(boundary(30));
console.log(boundary(400));
console.log(boundary(1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(testo) {
    if (testo.startsWith("EPICODE")) {
        return testo;
    } else {
        let testoEpico = "EPICODE " + testo;
        return testoEpico;
    }
}
console.log(epify("hello word"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
    if (n > 0 && n % 3 === 0 && n % 7 === 0) {
        return true;
    }
    return false;
}
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    let nuovaStringa = "";
    let i = stringa.length - 1;
    for (lettera in stringa) {
        nuovaStringa += stringa[i];
        i--;
    }
    return nuovaStringa;
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(word) {
    let string = word.split("");
    for (i = 0; i < string.length; i++) {
        if (i == 0 && string[i] == string[i].toLowerCase()) {
            string[i] = string[i].toUpperCase();
        }
        if (i != 0 && string[i] == " ") {
            string[i + 1] = string[i + 1].toUpperCase();
        }
    }
    newWord = string.join("");
    return newWord;
}
console.log(upperFirst("lorem ipsum dolor sit amet"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
    return stringa.slice(1, -1);
}
console.log(cutString("eepicodee"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let random = [];
    for (var i = 0; i < 10; i++) {
        random[i] = Math.floor(Math.random() * n);
    }
    return random;
}
console.log(giveMeRandom(11));
