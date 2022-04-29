import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CARS } from './mock-cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  searchTerm: string;
  cars = CARS;
  filterTerm: string;
  countryFilterTerm: string;
  sorterTerm: number;
  sortingActive: boolean;
  alphabetSortingActive: boolean;

  constructor(private _snackBar: MatSnackBar) {
    this.searchTerm = "";
    this.filterTerm = "";
    this.countryFilterTerm = "";
    this.sorterTerm = 0;
    this.sortingActive = false;
    this.alphabetSortingActive = false;
  }

  ngOnInit(): void {
    const data = localStorage.getItem("cars")
    if(data !== "" && data !== null) {
    this.cars = JSON.parse(data)}
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
