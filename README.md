Describe: ToDoList()

Test: "Creates a new instance of the ToDo list object when called with the new operator"
Code: let toDoList = new ToDoList;
Expected Output: toDoList = {};

Test: "Adds list items to instance of todo list"
Code: 
let toDoList = new ToDoList;
let task1 = new ListItem("eat dog", true, "today");
toDoList.addItem(task1);
Expected Output: toDoList = { eat dog: task1 }

Test: "Assigns unique id to each list item"
Code:
let toDoList = new ToDoList;
let task1 = new ListItem("eat dog", true, "today");
toDoList.addItem(task1);
Expected Output: toDoList = { 1: task1 }

Test: "Removes a list item from the list"
Code: 
let toDoList = new ToDoList;
let task1 = new ListItem("eat dog", true, "today");
let task2 = new ListItem("get new dog", false, "tomorrow");
toDoList.addItem(task1);
toDoList.addItem(task2);
toDoList.deleteItem(task2);
Expected Output: toDoList = { 1: task1 }


Describe ListItem()

Test: "Create new instance of a list item"
Code: 
let task1 = new ListItem("eat dog", true, "today")
Expected Output: task1 = { task: "eat dog", complete: true, date: "today" }

