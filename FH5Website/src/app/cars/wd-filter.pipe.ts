import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'wdfilter'
})
export class WdFilterPipe implements PipeTransform {
  transform(cars: any[], filterTerm: string): any[] {
    if(!cars || !filterTerm) {
      return cars
    }

    return cars.filter(car =>
      car.wd.toUpperCase().indexOf(filterTerm.toUpperCase()) !== -1);
  }
}
