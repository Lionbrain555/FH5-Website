import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {
  transform(cars: any[], countryFilterTerm: string): any[] {
    if(!cars || !countryFilterTerm) {
      return cars
    }

    return cars.filter(car =>
      car.country.toUpperCase().indexOf(countryFilterTerm.toUpperCase()) !== -1);
  }
}
