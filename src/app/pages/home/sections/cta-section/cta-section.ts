import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cta-section',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './cta-section.html',
    styleUrl: './cta-section.css',
})
export class CtaSection {
    scrollTo(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
}
