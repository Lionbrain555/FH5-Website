import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'carfilter'
})
export class carFilterPipe implements PipeTransform {
  transform(cars: any[], searchTerm: string): any[] {
    if(!cars || !searchTerm) {
      return cars
    }

    return cars.filter(car =>
      car.model.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
