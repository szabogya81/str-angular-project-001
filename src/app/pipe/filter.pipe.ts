import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterStr: string, key: string = ''): unknown {

    if (!Array.isArray(value) || !filterStr || !key) {
      return value;
    }

    return value.filter(item => {

      if (key === 'name' || key === 'description' || key === 'image') {
        return (item[key].toLowerCase().includes(filterStr.toLowerCase()));
      }
      return (item[key].toString() === filterStr);

    });
  }
}
