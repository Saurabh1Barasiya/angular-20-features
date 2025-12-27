import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface TODO{
  title:string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected title = 'tut-24';

  todoForm!:FormGroup;
  editIndex:number|null = null;
  todosList:TODO[] = [];

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      titleControl : new FormControl('',[Validators.required])
    })
  }


  addTodo(){
    // check edit or add data.
    let data = this.todoForm.value.titleControl;
    // console.log("edit kar do yr please ",this.editIndex);
    if(this.editIndex !== null){
      // edit karna 
      // console.log("edit kar do ",this.editIndex);
      this.todosList[this.editIndex].title = data;
      this.editIndex = null;
    }else{
      this.todosList.push({title:data});
    }
    this.todoForm.reset();
  }

  removeTodo(indexNumber:number){
    this.todosList.splice(indexNumber,1);

    if(this.editIndex == indexNumber){
      this.todoForm.reset();
      this.editIndex = null;
    }
  }

  editTodo(indexNumber:number){
    this.editIndex = indexNumber;

    // console.log("from edit function",this.editIndex);

    this.todoForm.setValue({
      titleControl:this.todosList[indexNumber].title,
    })
  }
}
