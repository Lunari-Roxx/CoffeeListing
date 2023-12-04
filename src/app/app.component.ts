import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoffeesService } from './services/coffees.service';
import { CardComponent } from './components/card/card.component'
import { ICoffee } from './interfaces/ICoffee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  coffees!: ICoffee[];
  buttons!: NodeListOf<HTMLButtonElement>;

  constructor(private coffeService: CoffeesService) { }

  ngOnInit(): void {
    this.buttons = document.querySelectorAll('button')
    this.coffeService.getData$.subscribe({
      next: (coffees) => this.coffees = coffees
    })
  }

  showAllCoffees(targetEvent: MouseEvent) {
    this.coffeService.getData$.subscribe({
      next: (coffees) => this.coffees = coffees
    })
    this.toggleButton(targetEvent)
  }

  showAvailableCoffees(targetEvent: MouseEvent) {
    this.coffeService.getFilteredData$.subscribe({
      next: (coffees) => this.coffees = coffees
    })
    this.toggleButton(targetEvent)
  }

  toggleButton(event: MouseEvent) {
    this.buttons.forEach(element => {
      if (element === event.target) {
        element.classList.add('active')
      } if (element !== event.target) {
        element.classList.remove('active')
      }
    })
  }
}
