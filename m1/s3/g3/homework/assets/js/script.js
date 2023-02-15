let button = document.getElementById("add");
let container = document.getElementById("task_container");
let idTask = 0;

// al click del bottone scatena la funzione 'getTask'
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
    li.className = "task_item";
    li.setAttribute("id", `${idTask}`);
    container.append(li);
    clearInput();
    addDeleteButton(idTask);
    idTask++;
}

// questa funzione semplicemente svuota la casella di input
function clearInput() {
    document.getElementById("input").value = "";
}

let list = document.querySelector("ul");
list.addEventListener("click", function () {
    event.target.style = "text-decoration: line-through";
});

let listElements = document.getElementsByTagName("li");

function addDeleteButton(idTask) {
    let span = document.createElement("span");
    span.innerHTML = "&#10060;";
    container.append(span);
    span.className = "cross";
    listElements[idTask].appendChild(span);
    span.addEventListener("click", function () {
        this.remove();
    });
}
