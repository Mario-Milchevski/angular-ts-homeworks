import { Car } from './../types/car.interface';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  car = input<Car | undefined>();
}