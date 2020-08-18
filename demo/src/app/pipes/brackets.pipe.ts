import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'brackets'})
export class BracketsPipe implements PipeTransform {
  transform(value: string, newcase : string = 'n') {
      if (newcase == 'u')
          value = value.toUpperCase();
      else
         if ( newcase == "l")
            value = value.toLowerCase();

      return "[" + value + "]";
  }
}