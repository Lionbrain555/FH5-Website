import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Sorter'
})
export class SorterPipe implements PipeTransform {
  transform(cars: any[], isActive: boolean): any[] {
    console.log(cars, isActive);
    if(!cars || !isActive) {
      return cars
    }

    return cars.sort(function(a:any,b:any){
      if (a.topspeed > b.topspeed)
        return -1;
      return 1;
    });

  }
}
