let button = document.getElementById("add");
let container = document.getElementById("task_container");

button.addEventListener("click", getTask);

function getTask() {
    let task = document.getElementById("input").value;
    addTask(task);
}

function addTask(currentTask) {
    let li = document.createElement("li");
    li.innerText = currentTask;
    container.append(li);
    clearInput();
}

function clearInput() {
    document.getElementById("input").value = "";
}
