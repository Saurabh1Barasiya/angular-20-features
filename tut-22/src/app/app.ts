import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Todo {
  id: number;
  title: string;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-22';

  todos: Todo[] = [];
  newTodo = '';

  editingId: number | null = null;
  editedTitle = '';

  addTodo() {
    if (!this.newTodo.trim()) return;

    this.todos = [
      ...this.todos,
      { id: Date.now(), title: this.newTodo }
    ];

    this.newTodo = '';
  }

  startEdit(todo: Todo) {
    this.editingId = todo.id;
    this.editedTitle = todo.title;
  }

  saveEdit(todo: Todo) {
    this.todos = this.todos.map(t =>
      t.id === todo.id ? { ...t, title: this.editedTitle } : t
    );
    this.editingId = null;
  }

  cancelEdit() {
    this.editingId = null;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
