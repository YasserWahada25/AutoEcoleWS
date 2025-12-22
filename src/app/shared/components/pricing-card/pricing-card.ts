import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.css',
})
export class PricingCard {
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() features: string[] = [];
  @Input() isPopular: boolean = false;
  @Input() buttonText: string = 'Choisir';
  @Input() link: string = '/contact';
}
