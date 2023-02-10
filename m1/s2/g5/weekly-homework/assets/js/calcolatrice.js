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

function scientific() {
    let extra_keys = document.querySelectorAll(".extra");
    for (extra of extra_keys) {
        extra.style.display = "inline-block";
    }
}
