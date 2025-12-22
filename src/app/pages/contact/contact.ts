import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
