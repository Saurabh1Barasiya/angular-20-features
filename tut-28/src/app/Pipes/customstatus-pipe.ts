import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customstatus'
})
export class CustomstatusPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Active" : "Inactive";
  }
}
