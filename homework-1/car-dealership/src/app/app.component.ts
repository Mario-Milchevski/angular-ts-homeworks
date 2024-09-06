import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from './types/car.interface';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import carJson from './data/cars.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cars = signal<Car[]>([...(carJson as Car[])]);
  selectedPage = signal<'home' | 'about' | 'contact'>('home');

  handleSelectedPage(value: 'home' | 'about' | 'contact') {
    this.selectedPage.update(() => value)
  }
}
