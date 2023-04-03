Describe: ToDoList()

Test: "Creates a new instance of the ToDo list object when called with the new operator"
Code: let toDoList = new ToDoList;
Expected Output: toDoList = {};

Test: "Adds list items to instance of todo list"
Code: 
let toDoList = new ToDoList;
let task1 = new ListItem("eat dog", true, "today");
toDoList.addItem(task1);


Describe ListItem()

Test: "Create new instance of a list item"
Code: 
let task1 = new ListItem("eat dog", true, "today")
Expected Output: task1 = { task: "eat dog", complete: true, date: "today" }
