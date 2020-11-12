import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Van } from '../van';

@Component({
  selector: 'app-vehicule-create',
  templateUrl: './vehicule-create.component.html',
  styleUrls: ['./vehicule-create.component.css']
})
export class VehiculeCreateComponent implements OnInit {
    Car:Car = new Car();
    Van:Van = new Van();
    selectedVehicule:String = "";
  constructor() { }
  save(event):void{
    event.preventDefault();
    console.log(this.selectedVehicule);
  }
  ngOnInit(): void {
  }

}
