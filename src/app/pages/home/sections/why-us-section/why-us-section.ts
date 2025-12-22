import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { ServiceCard } from '../../../../shared/components/service-card/service-card';

@Component({
    selector: 'app-why-us-section',
    standalone: true,
    imports: [CommonModule, SectionTitle, ServiceCard],
    templateUrl: './why-us-section.html',
    styleUrl: './why-us-section.css',
})
export class WhyUsSection {
    // Content is now static HTML for the branding statement
}
