import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css',
})
export class HeroSection {
    scrollTo(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
}
