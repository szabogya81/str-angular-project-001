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

      if (key === 'id') {
        return (item[key].toString() === filterStr)
      }
      if (key === 'catId') {
        return (item[key].toString() === filterStr);
      }
      if (key === 'name') {
        return (item[key].toLowerCase().includes(filterStr.toLowerCase()))
      }
      if (key === 'description') {
        return (item[key].toLowerCase().includes(filterStr.toLowerCase()))
      }
      if (key === 'image') {
        return (item[key].toLowerCase().includes(filterStr.toLowerCase()))
      }
      if (key === 'price') {
        return (item[key].toString() === filterStr)
      }
      if (key === 'stock') {
        return (item[key].toString() === filterStr)
      }
      if (key === 'featured') {
        return (item[key].toString() === filterStr)
      }
      if (key === 'active') {
        return (item[key].toString() === filterStr)
      }
    });
  }
}
