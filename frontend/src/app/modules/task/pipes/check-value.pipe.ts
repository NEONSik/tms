import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'checkValue'
})
export class CheckValuePipe implements PipeTransform {

  transform(value: string): string {
    if (value == null) {
      return '';
    } else {
      return value;
    }
  }

}
