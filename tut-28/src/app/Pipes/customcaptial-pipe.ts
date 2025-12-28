import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcaptial'
})
export class CustomcaptialPipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase()+value.slice(1).toLowerCase();
  }

}
