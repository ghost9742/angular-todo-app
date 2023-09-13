import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'new-task', component: NewTodoComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
