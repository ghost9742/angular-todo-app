import { TodoService } from './../todo.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { Todo } from 'src/todo.model';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  faListCheck = faListCheck;
  faList = faList;

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}
  todos = this.todoService.getTodos();

  // get deleted todo for a popup message
  public get todoDeletedGetter(): boolean {
    return this.todoService.deleted;
    // todoService is the injected Service
  }

  // get completed todo for a popup message
  public get todoCompletedGetter(): boolean {
    return this.todoService.completed;
  }

  // get a popup message title for deleted todo
  title: any = this.todoService.deletedTodoDescription.subscribe(
    (val) => (this.title = val)
  );

  // get a popup message title for completed todo
  titleCompleted: any = this.todoService.completedTodoDescription.subscribe(
    (val) => (this.titleCompleted = val)
  );
}
