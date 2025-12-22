import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
})
export class TestimonialCard {
  @Input() name: string = '';
  @Input() text: string = '';
  @Input() rating: number = 5;
  @Input() image: string = ''; // Optional avatar
}
