/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
    name: "Nestor",
    surname: "Cicardini",
    age: 19,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "C"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Python");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
console.log(whoIsBigger(6, 2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(text) {
    return text.split(" ");
}
console.log(splitMe("Hello World"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(string, boolean) {
    let arrStr = string.split("");
    boolean ? arrStr.shift() : arrStr.pop();
    return arrStr.join(" ");
}

console.log(deleteOne("Hello Word", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(text) {
    return text.replace(/\d/g, "");
}

console.log(onlyLetters("I have 4 dogs. I have 3 cats"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
}
console.log(isThisAnEmail("email.test@gmail.com.it"));
console.log(isThisAnEmail("email!test@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
    let day = new Date();
    return day.getDay();
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(n) {
    let dices = {};
    let arrValues = [];

    let sum = 0;
    for (let i = 0; i < n; i++) {
        currentDice = dice();
        arrValues.push(currentDice);
        sum += currentDice;
    }

    dices.sum = sum;
    dices.values = arrValues;
    return dices;
}

console.log(rollTheDices(2));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) {
    const oneDayTime = 24 * 60 * 60 * 1000; //Numero di millisecondi in 1 giorno
    let today = new Date();

    //data di oggi in millisecondi
    today = today.getTime();

    //seconda data in millisecondi
    date = date.getTime();

    let timeDifference = date - today;

    //convertire la differenza tra le date in giorni
    let days = timeDifference / oneDayTime;

    //rendere il numro positivo
    days = days - days * 2;

    return Math.floor(days);
}
console.log(howManyDays(new Date("2/1/2023")));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
    let today = new Date();
    today = today.getDate() + "/" + (today.getMonth() + 1);
    return today === "3/5" ? true : false;
}
console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
    {
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Year: "2001",
        imdbID: "tt0120737",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },

    {
        Title: "The Lord of the Rings: The Return of the King",
        Year: "2003",
        imdbID: "tt0167260",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Two Towers",
        Year: "2002",
        imdbID: "tt0167261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "Lord of War",
        Year: "2005",
        imdbID: "tt0399295",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "Lords of Dogtown",
        Year: "2005",
        imdbID: "tt0355702",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings",
        Year: "1978",
        imdbID: "tt0077869",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1990",
        imdbID: "tt0100054",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
        Title: "The Lords of Salem",
        Year: "2012",
        imdbID: "tt1731697",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
        Year: "1984",
        imdbID: "tt0087365",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1963",
        imdbID: "tt0057261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const prova = {
    prop1: "hello",
    prop2: "word",
};

function deleteProp(obj, str) {
    delete obj[str];
    return obj;
}
console.log(deleteProp(prova, "prop2"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
    let recent = 0;
    for (film in movies) {
        if (movies[film].Year > recent) {
            recent = movies[film].Year;
        }
    }

    return recent;
}
console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
    return movies.length;
}

console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
    let releaseYears = [];

    for (film of movies) {
        releaseYears.push(film.Year);
    }
    return releaseYears;
}

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
    let lastMillenium = [];

    for (film of movies) {
        if (film.Year < 2000) {
            lastMillenium.push(film.Title);
        }
    }
    return lastMillenium;
}

console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
    let sum = 0;
    for (film of movies) {
        sum += Number(film.Year);
    }
    return sum;
}

console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(titleSearch) {
    let result = [];
    let expression = `.*${titleSearch}.*`;
    let re = new RegExp(expression, "g");

    for (film of movies) {
        if (re.test(film.Title)) {
            result.push(film.Title);
        }
    }
    return result;
}

console.log(searchByTitle("Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(titleSearch) {
    const division = {
        match: [],
        unmatch: [],
    };
    let expression = `.*${titleSearch}.*`;
    let re = new RegExp(expression, "g");

    for (film of movies) {
        if (re.test(film.Title)) {
            division.match.push(film.Title);
        } else {
            division.unmatch.push(film.Title);
        }
    }

    return division;
}

console.log(searchAndDivide("Avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(n) {
    movies.splice(n, 1);
    return movies;
}

console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectContainer() {
    return document.getElementById("container");
}

console.log(selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectTd() {
    return document.getElementsByTagName("td");
}

console.log(selectTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTd() {
    let colonne = document.getElementsByTagName("td");
    for (td of colonne) {
        console.log(td.innerText);
    }
}

printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function addBg() {
    let links = document.getElementsByTagName("a");
    for (a of links) {
        a.style = "background-color: pink";
    }
}
addBg();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addElement() {
    let list = document.getElementById("myList");
    let li = document.createElement("li");
    li.innerText = "Link 4";
    list.append(li);
}

addElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function clearList() {
    let list = document.getElementById("myList");
    list.remove();
}
// clearList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClass() {
    let tr = document.querySelectorAll("tr");

    for (row of tr) {
        row.classList.add("my-class");
    }
}

addClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(n) {
    let asterischo = "*";
    let asterischi = "";

    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        asterischi += asterischo;
        div.innerHTML = asterischi;
        document.body.appendChild(div);
    }
}

halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

  *
 ***
*****

*/

function tree(n) {
    let carattere = "";
    let div = document.createElement("div");

    //loop generale
    for (let i = 0; i <= n; i++) {
        // stampare spazi
        for (let j = 1; j <= n - i; j++) {
            carattere += "&nbsp;&nbsp;";
        }
        // stampare asterischi
        for (let k = 0; k < 2 * i - 1; k++) {
            carattere += "*";
        }
        carattere += "<br>";
        div.innerHTML = carattere;
        document.body.appendChild(div);
    }
}
tree(6);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(n) {
    if (n % 1 === 0 && n % n === 0) {
        return true;
    }
    return false;
}

console.log(isItPrime(11));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
