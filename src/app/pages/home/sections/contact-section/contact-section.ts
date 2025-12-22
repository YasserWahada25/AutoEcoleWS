import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [CommonModule, SectionTitle],
    templateUrl: './contact-section.html',
    styleUrl: './contact-section.css',
})
export class ContactSection implements OnInit {
    mapUrl: SafeResourceUrl | undefined;
    googleMapsLink = 'https://maps.app.goo.gl/PBsFLsi97mzo35rw7';

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        // Embed URL for Paris (example)
        const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.9789482367846!2d8.798339375192464!3d34.401880999188705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f897af732c93e7%3A0x9a957e107224f943!2sAuto-%C3%A9cole%20Saber-benammar!5e0!3m2!1sfr!2stn!4v1766360756767!5m2!1sfr!2stn';
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
