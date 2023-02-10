function getSymbol(element) {
    let symbol = element.getAttribute("data-symbol");
    printSymbol(symbol);
}

function printSymbol(symbolToPrint) {
    document.querySelector("#display").value += symbolToPrint;
}

function calcResult() {
    // metodo alternativo a eval, crea una nuova funzione anonima che 'ritorna' il risultato dell' operazione
    let trasform = Function("return " + display.value)();
    document.querySelector("#display").value = trasform;
}

function clearDisplay() {
    document.querySelector("#display").value = " ";
}
function enableScientific() {
    let extra_keys = document.querySelector(".scientific_area");
    showScientific(extra_keys);
}

function showScientific(extra_keys) {
    extra_keys.style.display = "block";
}

// Ho provato a  mostrare/nascondere i tasti scientifici. Ma la funzione partiva soltanto al secondo click
/* function scientific(extra_keys) {
    displayType = extra_keys.style.display;
    if (displayType == "none") {
        extra_keys.style.display = "block";
    }
    else {
        extra_keys.style.display = "none";
    }
} */
