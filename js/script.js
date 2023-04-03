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
        console.log(toDoList.tasks[id].complete);
    } 
}

window.addEventListener("load", function() {
    this.document.querySelector("form").addEventListener("submit", userInput)
})