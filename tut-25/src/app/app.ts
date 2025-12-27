import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface User {
  name: string,
  email: string,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected title = 'tut-25';

  userForm!: FormGroup;
  editIndex:number|null = null;   // for editing the form .

  usersArray:User[] = [];


  ngOnInit(): void {
    this.userForm = new FormGroup({
      name : new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
    })
  }

  submitData(){
    // console.log(this.userForm.value);
    // console.log(this.userForm.value as User);  // stongally bol rahe h ki ye value user type ki h

    // ab samjaho yaha data save kara h ya update

    if(this.userForm.valid){

      let formData = this.userForm.value as User;

      if(this.editIndex === null){
        // simple data save kero.
        this.usersArray.push(formData)

      }else{
        // edit wala kaam yaha kero.
        // this.userForm 
        this.usersArray[this.editIndex] = formData;
        this.editIndex = null;
      }

    }

    this.userForm.reset();
  }

  cancel(){
    console.log("you click on cancel...");

    this.userForm.reset();
    this.editIndex = null;

  }

  edit(index:number){
    this.editIndex = index;
    this.userForm.setValue(this.usersArray[index])
  }

  delete(indexNumber:number){
    this.usersArray.splice(indexNumber,1);
    if(this.editIndex == indexNumber){
      this.cancel();
    }
  }
}
