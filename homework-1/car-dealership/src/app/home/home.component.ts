import { CommonModule } from '@angular/common';
import { Car } from '../types/car.interface';
import { CarsComponent } from './../cars/cars.component';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cars = input<Car[]>([]);
}
