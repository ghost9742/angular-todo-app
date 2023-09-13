import { Todo } from 'src/todo.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnDestroy {
  faCheck = faCheck;
  faTrash = faTrash;
  faTriangleExclamation = faTriangleExclamation;

  @Input() todo!: any;

  ngOnInit(): void {}

  constructor(private todoService: TodoService) {}

  // function for deleting todo
  delete(id: number) {
    this.todoService.deleteTodo(id);
    this.todoDeleted();
    // console.log(this.todo.description);
    this.todoService.deletedTodoDescription.next(this.todo.description);
  }

  // function for completing todo
  complete(id: number, todo: Todo) {
    this.todoService.completeTodo(id, todo);
    this.todoCompleted();
    this.todoService.completedTodoDescription.next(this.todo.description);
  }

  // function that shows a popup when todo is deleted
  todoDeleted() {
    this.todoService.deleted = true;
    setTimeout(() => {
      this.todoService.deleted = false;
    }, 3000);
  }
  // function that shows a popup when todo is completed
  todoCompleted() {
    this.todoService.completed = true;
    setTimeout(() => {
      this.todoService.completed = false;
    }, 3000);
  }

  ngOnDestroy() {}
}

// ngOnDestroy(): void {
//   this.todoService.preservedTitle = this.todo.description;
//   console.log(this.todoService.preservedTitle);
// }
