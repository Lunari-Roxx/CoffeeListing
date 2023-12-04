import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICoffee } from '../../interfaces/ICoffee';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: ICoffee

}
