import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
})
export class SectionTitle {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() align: 'left' | 'center' = 'center';
}
