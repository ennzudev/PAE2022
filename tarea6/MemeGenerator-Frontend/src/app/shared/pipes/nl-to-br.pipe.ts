import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nlToBr'
})
export class NlToBrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\n/g, '<br>');
  }

}
