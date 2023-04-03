function ToDoList () {
    this.tasks = {};
    this.currentId = 0;
}

ToDoList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId
}

ToDoList.prototype.addItem = function(item){
    this.tasks[this.assignId()] = item;
}

ToDoList.prototype.deleteItem = function(id){
    delete this.tasks[id];
}

function ListItem (task, date) {
    this.task = task;
    this.complete = false;
    this.date = date;
}

//  UI LOGIC!
const toDoList = new ToDoList();

function userInput(e) {
    e.preventDefault();
    const taskName = document.getElementById("taskName").value;
    const date = document.getElementById("date").value;

    let newItem = new ListItem(taskName, date);
    toDoList.addItem(newItem)
    displayList();
}

function displayList(){
    let listItems = document.getElementById("listItems");
    let itemCard = document.createElement("div");
    itemCard.setAttribute("class","itemCard");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let pTask = document.createElement("p");
    let pDate = document.createElement("p");
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("class","removeBtn");
    removeBtn.innerText = "X";

    let keys = Object.keys(toDoList.tasks)
    let newEntry = keys.pop();

    itemCard.setAttribute("id", newEntry)

    pTask.innerText = toDoList.tasks[newEntry].task
    pDate.innerText = toDoList.tasks[newEntry].date
    itemCard.append(checkbox,pTask,pDate,removeBtn);
    listItems.append(itemCard);

    removeBtn.addEventListener("click", removeItem);
    checkbox.addEventListener("click", checkOffItem);
}

function removeItem(e) {
    let id = e.target.parentNode.id;
    toDoList.deleteItem(id);
    e.target.parentNode.remove();
}

function checkOffItem (e){
    let id = e.target.parentNode.id;
    if (toDoList.tasks[id].complete === false) {
        toDoList.tasks[id].complete = true;
        displayDone(id);
        console.log(toDoList.tasks[id].complete);
    } else {
        toDoList.tasks[id].complete = false;
        console.log(toDoList.tasks[id].complete);
        deleteDiplay(id);

    }
}

function displayDone(id) {
    const listItems = document.querySelector("#listItems")
    const doneDisplay = document.createElement("div");
    doneDisplay.setAttribute("id", "done");
    listItems.after(doneDisplay);

    const pInfo = document.createElement("p");
    pInfo.setAttribute("class", "done");
    pInfo.setAttribute("id", `done${id}`)
    pInfo.innerText = toDoList.tasks[id].task + " " + toDoList.tasks[id].date;
    doneDisplay.append(pInfo);
}

function deleteDiplay(id){
    document.querySelector(`p#done${id}`).remove()
}

window.addEventListener("load", function() {
    this.document.querySelector("form").addEventListener("submit", userInput)
})