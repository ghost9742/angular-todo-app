// This is a pipe that sorts array of todos and sets the urgent ones on top // can be used for sorting by category later //

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    // if (!Array.isArray(array)) {
    //   return;
    // }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return 1;
      } else if (a[field] > b[field]) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
