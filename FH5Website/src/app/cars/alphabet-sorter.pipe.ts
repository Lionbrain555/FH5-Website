import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetSorter'
})
export class AlphabetSorterPipe implements PipeTransform {
  transform(cars: any[], alphabetisActive: boolean): any[] {
    console.log(cars, alphabetisActive);
    if(!cars || !alphabetisActive) {
      return cars
    }
    return cars.sort((a,b) => a.brand.localeCompare(b.brand))

  }
}
