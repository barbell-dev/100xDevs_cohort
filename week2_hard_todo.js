class Todo {
  constructor() {
    this.TodoList = [];
  }
  add(string) {
    this.TodoList.push(string);
  }
  remove(indexOfTodo) {
    this.TodoList.splice(indexOfTodo, 1);
  }
  getAll() {
    return this.TodoList;
  }
  get(indexOfTodo) {
    for (let i = 0; i < this.TodoList.length; i++) {
      if (i == indexOfTodo) {
        return this.TodoList[i];
      }
    }
    return false;
  }
  clear() {
    this.TodoList = [];
  }
}
let todo = new Todo();
todo.add("washing");
todo.add("cooking");
todo.remove(0);
let result = todo.getAll();
if (!result) {
  console.log("index Not found");
}
console.log(result);
console.log("Done");
todo.clear();
let final = todo.getAll();
console.log(final);
