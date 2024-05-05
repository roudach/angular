import { Component } from '@angular/core';
import { CarteVisite } from '../model/CarteVisite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent {
  carteVisite:CarteVisite = new CarteVisite()

  //carteVisite: CarteVisite = new CarteVisite();
  constructor() { }
  ngOnInit(): void {
  }
  
  onSubmit(): void {
    console.log(this.carteVisite);
    }
  
}
