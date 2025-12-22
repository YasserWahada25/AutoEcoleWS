import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = ''; // Emoji or class name
  @Input() points: string[] = [];
}
