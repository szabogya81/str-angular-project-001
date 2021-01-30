import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterStr: string): unknown {
 
    if (!Array.isArray(value) || !filterStr) {
      return value;
    }

    return value.filter(item => (item['name'].toLowerCase().includes(filterStr.toLowerCase())));
  }
}
