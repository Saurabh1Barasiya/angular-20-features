import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface TODO{
  id:number,
  title:string,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-23';
  placeholder = "add todo here";

  todosList:TODO[] = [];
  todoTitle = '';

  editID:number|null = null;
  editTitle:string = '';

  addTodo(){
    if(!this.todoTitle){
      alert("please add todos");
    }else{
      this.todosList = [...this.todosList,{id:Date.now(),title:this.todoTitle}]
    }
    this.todoTitle = '';
  }

  deleteTodo(index:number){
    this.todosList = this.todosList.filter((t)=>t.id !== index)
  }


  startEdit(todo:TODO){
    this.editID = todo.id;
    this.editTitle = todo.title;
  }

  save(todo:TODO){
    // console.log("will save data here...",this.editTitle);
    this.todosList = this.todosList.map((t)=>{
      return t.id === todo.id ? { ...t,title:this.editTitle } : t
    })

    this.editID = null;
    this.editTitle = '';
  }

  cancel(){
    this.editID = null;
    this.editTitle = '';
  }
}
