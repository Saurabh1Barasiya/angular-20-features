import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface TODO{
  id:number,
  title:string,
  completed:boolean,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-20';
  todoContent = "";

  todo:TODO[] = [];

  addTodo(){
    // console.log(this.todoContent);
    // this.todoContent = '';
    // console.log(Date.now())

    if(!this.todoContent.trim()){
      alert("please type");
      return;
    }

    this.todo.push({
      id:Date.now(),
      title:this.todoContent,
      completed:false
    });

    this.todoContent = '';
  }


  deleteTodos(id:number){
    // console.log("vhdd",typeof id);

    this.todo = this.todo.filter(t=>t.id !== id);
  }
}
