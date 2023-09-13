import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/todo.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  faShare = faShare;
  constructor(private todoService: TodoService) {}
  completedTodos = this.todoService.completedTodos;

  // function for returning todo to a task list
  uncomplete(id: number, todo: Todo) {
    this.todoService.uncompleteTodo(id, todo);
    this.todoUncompleted();
    this.todoService.uncompletedTodoDescription.next(todo.description);
    this.todoService.sortTodos();
  }

  // popup 3 seconds timer
  todoUncompleted() {
    this.todoService.uncompleted = true;
    setTimeout(() => {
      this.todoService.uncompleted = false;
    }, 3000);
    console.log(this.titleUncompleted);
  }

  // get uncomplete todos for popup title
  public get todoUncompletedGetter(): boolean {
    return this.todoService.uncompleted;
    // todoService is the injected Service
  }

  titleUncompleted: any = this.todoService.uncompletedTodoDescription.subscribe(
    (val) => (this.titleUncompleted = val)
  );
}
