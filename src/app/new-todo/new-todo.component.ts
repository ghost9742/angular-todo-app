import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/todo.model';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  faArrowRight = faArrowRight;
  constructor(private todoService: TodoService, private router: Router) {}
  todo!: Todo;
  description!: string;
  isValid: boolean = true;

  todoForm = new FormGroup({
    description: new FormControl('', Validators.required),
    urgent: new FormControl(),
  });
  onSubmit() {
    this.description = <string>this.todoForm.value.description;
    console.log(this.todoForm.value);
    this.todo = new Todo(
      <string>this.todoForm.value.description,
      // cast radio button from ||undefiend and null|| to ||true and false|| for todo-list component
      true ? this.todoForm.value.urgent === undefined : false === null
    );

    // if todo is valid - add it to the array
    if (this.todo.description !== '') {
      this.isValid = true;
      this.todoService.addTodo(this.todo);
      this.router.navigate(['']);
    }
    // if todo is invalid, set isValid to false and stop and print error on screen
    if (this.todo.description === '') {
      this.isValid = false;
    }
    // resets the form and patches the values so user cannot submit empty todo on desktop view
    this.todoForm.reset();
    this.todoForm.patchValue({ description: '', urgent: null });
    this.todoService.sortTodos();
  }
}
