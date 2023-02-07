/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JavaScript sono i seguenti:
  string --> sequenza di caratteri alfanumerici (testo/parola). Si racchiude nelle virgolette;
  number --> è un dato di tipo numerico (intero o decimale) e non ha bisogno delle virgolette per essere definito;
  boolean --> assume due valori: vero o falso;
  null --> valore vuoto, sconosciuto;
  undefined --> è il dato di una variabile dichiarata ma alla quale non è stato assegnato nessun valore;
  object --> gruppo di variabili.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

  let nome = "Nestor";
  console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
  a = 12;
  b = 20;
  console.log(a+b);
  console.log(12+20);
  console.log(`Il risultato della somma è: ${12+20}`);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

  let x = 12;
  console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

  nome = "Cicardini";
  console.log(nome);

  const NOME = "Nestor";
  // NOME = "Andres";
  // console.log(NOME);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

  console.log(x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

  let name1 = "john";
  let name2 = "John";
  console.log(name1 === name2);


  let name3 = name2.toLowerCase();
  console.log(name1 === name3);
 