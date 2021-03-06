import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;
  rentedCar: Car;
  car: Car = new Car();
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCarsWithObservable().subscribe(cars => this.cars = cars);
  }

  onSelect(car: Car): void {
    console.warn(car);
    this.selectedCar = car;
  }

  rent(car: Car): void {
    this.carService.rent(car).subscribe(c => this.rentedCar = c);
  }

    onSave(): void {
    this.car.rented = false;
    this.cars.push(this.car);
    this.carService.save(this.car).subscribe(data => {
        console.log('cool ');
      }, err => {
        console.log(err);
      });
         }
}
