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
}



window.addEventListener("load", function() {
    this.document.querySelector("form").addEventListener("submit", userInput)
})