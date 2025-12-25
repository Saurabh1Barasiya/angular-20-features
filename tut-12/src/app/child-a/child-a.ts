import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-a',
  imports: [],
  templateUrl: './child-a.html',
  styleUrl: './child-a.css',
})
export class ChildA implements OnChanges,DoCheck{
  
  @Input() childUser!:{name:string,age:number};

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    // iske ander ham childUser input ko detact nahi kar payege 
    // kyoki uska reference chnage nahi hua h. 
    // uski only value change ho rahi h parent component par.
  }

  preAge!:number;
  ngDoCheck(){
    if(this.preAge === undefined && this.childUser){
      this.preAge = this.childUser.age;
    }


    if(this.preAge !== this.childUser.age){
      console.log("change detact",this.childUser.age);
    }
  }
}
