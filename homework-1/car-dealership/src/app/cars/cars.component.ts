import { Component, input } from '@angular/core';
import { Car } from '../types/car.interface';
import { CarComponent } from '../car/car.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [MatGridListModule, CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = input<Car[]>([]);
  cols: number = 0;

  ngOnInit(): void {
    this.calculateColumns();
  }

  calculateColumns(innerWidth: number = window.innerWidth) {
    if (innerWidth <= 400) {
      this.cols = 1;
    } else if (innerWidth <= 768) {
      this.cols = 2;
    } else if (innerWidth <= 1024) {
      this.cols = 3;
    } else if (innerWidth <= 1200) {
      this.cols = 4;
    } else {
      this.cols = 5;
    }
  }

  onResize(event: any) {
    this.calculateColumns(event.target.innerWidth);
  }
}
