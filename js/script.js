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

function ListItem (task, complete, date) {
    this.task = task;
    this.complete = complete;
    this.date = date;
}

