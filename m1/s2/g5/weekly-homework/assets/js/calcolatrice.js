function getSymbol(element) {
    let symbol = element.getAttribute("data-symbol");
    printSymbol(symbol);
}

function printSymbol(symbolToPrint) {
    document.querySelector("#display").value += symbolToPrint;
}
