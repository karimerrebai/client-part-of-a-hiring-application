import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, term: any): any {
    if (term == null) {
      return value;
    } else {
      return value.filter(
        (item: any) =>
          item.jobtitle.includes(term) || item.place.includes(term)
      );
    }
  }
}
