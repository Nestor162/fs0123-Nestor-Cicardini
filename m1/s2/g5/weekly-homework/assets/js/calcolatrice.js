function getSymbol(element) {
    let symbol = element.getAttribute("data-symbol");
    printSymbol(symbol);
}

function printSymbol(symbolToPrint) {
    document.querySelector("#display").value += symbolToPrint;
}

function calcResult() {
    document.querySelector("#display").value = eval(display.value);
}

function clearDisplay() {
    console.log("elprpr");
    document.querySelector("#display").value = " ";
}
