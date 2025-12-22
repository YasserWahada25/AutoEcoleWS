import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { value: '98%', label: 'Taux de réussite' },
    { value: '1500+', label: 'Élèves formés' },
    { value: '10', label: 'Années d\'expérience' },
    { value: '15', label: 'Moniteurs' }
  ];
}
