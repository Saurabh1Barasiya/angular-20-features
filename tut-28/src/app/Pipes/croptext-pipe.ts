import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'croptext'
})
export class CroptextPipe implements PipeTransform {

  transform(value: string,limit:number=5): string {
    if(!value){
      return value;
    }else{
      if(value.length > limit){
        return value.slice(0,limit)+'...';
      }else{
        return value;
      }
    }
  }

}
