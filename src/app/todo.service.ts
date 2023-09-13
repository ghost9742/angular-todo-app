import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/todo.model';

@Injectable()
export class TodoService {
  // subjets for popup message
  deletedTodoDescription = new Subject();
  completedTodoDescription = new Subject();
  uncompletedTodoDescription = new Subject();
  todos: Todo[] = [
    new Todo('Client Meeting at 11 AM', true),
    new Todo('Finish homework', false),
  ];

  completedTodos: Todo[] = [
    new Todo('Cleaning', true),
    new Todo('Workout', false),
  ];

  constructor() {
    this.deletedTodoDescription.subscribe((val) => {
      console.log(val);
    });

    this.deletedTodoDescription.next('asd');
    this.deletedTodoDescription.next('asdd');
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  // sort todos by urgent property
  sortTodos() {
    this.todos = this.todos.sort((p1, p2) =>
      p1.urgent < p2.urgent ? 1 : p1.urgent > p2.urgent ? -1 : 0
    );
  }

  deleteTodo(id: number) {
    this.todos.splice(
      this.todos.findIndex((item) => item.id === id),
      1
    );
    // console.log(id);
  }

  completeTodo(id: number, todo: Todo) {
    this.todos.splice(
      this.todos.findIndex((item) => item.id === id),
      1
    );
    console.log(id);
    this.completedTodos.push(todo);
    console.log(this.completedTodos);
  }

  uncompleteTodo(id: number, todo: Todo) {
    this.completedTodos.splice(
      this.completedTodos.findIndex((item) => item.id === id),
      1
    );
    this.todos.push(todo);
  }

  // booleans for getters in todo-list.component and history.component
  public deleted: boolean = false;
  public completed: boolean = false;
  public uncompleted: boolean = false;
}
