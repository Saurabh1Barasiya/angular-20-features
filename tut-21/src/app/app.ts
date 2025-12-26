import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface TODO{
  id:number,
  title:string,
  completed:boolean,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'tut-21';
  
  todoForm!:FormGroup;
  todos:TODO[] = [];


  ngOnInit(): void {
    this.todoForm = new FormGroup({
      todoControl : new FormControl('',Validators.required),
    })
  }

  addTodo(){
    if(this.todoForm.valid){
      // console.log(this.todoForm.value);  // {todoControl: 'saurabh barasiya'}
      // console.log(this.todoForm.value.todoControl)  // saurabh barasiya

      let task = this.todoForm.value?.todoControl;
      this.todos.push({
        id:Date.now(),
        title:task,
        completed:false,
      })
      this.todoForm.reset();
    }
  }

  removeTodo(id:number){
    this.todos = this.todos.filter(todo=>todo.id !== id);
  }

}
