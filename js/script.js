function ToDoList () {
    this.tasks = {};
}

ToDoList.prototype.addItem = function(item){
    this.tasks[item.task] = item;
}

function ListItem (task, complete, date) {
    this.task = task;
    this.complete = complete;
    this.date = date;
}

