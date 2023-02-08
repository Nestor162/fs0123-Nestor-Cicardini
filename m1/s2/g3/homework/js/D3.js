/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

 /*
  let numero1 = prompt("Inserisci un numero intero: ");
  let numero2 = prompt("Inserisci un'altro numero intero: ");

  if(!isNaN(numero1,numero2)){

    if(Number(numero1) > Number(numero2)){
      console.log(`${numero1} è maggiore`);
    } else if (Number(numero1) < Number(numero2)) {
      console.log(`${numero2} è maggiore`);
    } else {
      console.log(`I due numeri sono uguali`);
    }

} else {
  console.log("inserisci un numero");
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
  /*
  let numero3 = prompt("Inserisci un numero intero: ");

  if (numero3 != 5){
    console.log("not equal");
  } else {
    console.log("equal");
  }
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*
  let numero4 = prompt("Inserisci un numero intero: ");

  if(numero4 % 5 == 0){
    console.log("Divisibile per 5");
  } else {
    console.log("Non divisibile per 5");
  }
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
  let numero1 = prompt("Inserisci un numero intero: ");
  let numero2 = prompt("Inserisci un'altro numero intero: ");

  if(numero1 == 8 || numero2 == 8){
    console.log("Almeno uno dei due numeri è uguale a 8");
  } else if (numero1 - numero2 == 8) {
    console.log("La loro sottrazione è uguale a 8");
  } else if (Number(numero1) + Number(numero2) == 8) {
    console.log("La loro addizione è uguale a 8");
  } else {
    console.log("Il risultato non è uguale a 8");
  }
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
  let totalShoppingCart = prompt("Quanto hai speso?");
  let spedizione = 10;

  if (totalShoppingCart > 50){
    console.log("Hai la spedizione gratuita");
  } else {
    console.log(`La spedizione costa ${spedizione}, l'ammontare totale è di: ${Number(totalShoppingCart)+spedizione}`);
  }
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
  let totalShoppingCart = prompt("Quanto hai speso?");
  let spedizione = 10;

    if (totalShoppingCart > 50){
      console.log(`Hai la spedizione gratuita, l'ammontare è di: ${Number(totalShoppingCart) - Number(totalShoppingCart*0.20)}`);
    } else {
      console.log(`La spedizione costa ${spedizione}, l'ammontare totale è di: ${Number(totalShoppingCart) - Number(totalShoppingCart*0.20) + spedizione}`);
    }
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*
  let numerati = [1,100,20];
  numerati.sort(function(a,b){
      return a - b;
  })
  console.log(numerati);
*/

/*
  let numerati = [1,100,20];
    numerati.sort(function(a,b){
        return b - a;
    })
    console.log(numerati);
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*
  let inserisciNumero = prompt("inserisci un numero")

  if(!isNaN(inserisciNumero)){
      console.log("è un numero")
  }
  else{
      console.log("non è un numero")
  }
*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
  let numero = prompt("Inserisci un numero: ");

  if(numero % 2 == 0){
    console.log(`${numero} è pari`);
  } else {
    console.log(`${numero} è dispari`);
  }
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
/*
  let val = 10
    if (val < 10 && val >= 5) {
        console.log("Meno di 10");
      } else if (val < 5) {
        console.log("Meno di 5");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
*/
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

// me.city = 'Toronto';
// console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

// delete me.lastName;
// console.log(me);



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

  // const me = {
  //   name: 'John',
  //   lastName: 'Doe',
  //   skills: ['javascript', 'html', 'css'],
  // }
  
  // let arraylength = me.skills.length-1;
  // delete me.skills[arraylength];
  // console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];
let i = 1;
do {;
  array.push(i);
  i++;
} while (i <= 10)

console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[array.length-1] = 100;
console.log(array);
