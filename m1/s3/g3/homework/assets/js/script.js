let button = document.getElementById("add");
let container = document.getElementById("task_container");

// al click del bottone scatenare la funzione 'getTask'
button.addEventListener("click", getTask);

// questa funzione ricava il testo dell'imput e 'chiama' a sua volta la funzione 'addTask'
function getTask() {
    let task = document.getElementById("input").value;
    addTask(task);
}

// la funzione addTask crea una elemento 'li' e lo mostra sul HTML. Inoltre chiama la funzione 'clearInput'
function addTask(currentTask) {
    let li = document.createElement("li");
    li.innerText = currentTask;
    container.append(li);
    clearInput();
}

// questa funzione semplicemente svuota la casella di input
function clearInput() {
    document.getElementById("input").value = "";
}

function completeTask(params) {}
