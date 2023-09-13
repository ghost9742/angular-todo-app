import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoComponent } from './todo/todo.component';
import { SortPipe } from './sort.pipe';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoService } from './todo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TodoListComponent,
    TodoComponent,
    SortPipe,
    NewTodoComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgScrollbarModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
