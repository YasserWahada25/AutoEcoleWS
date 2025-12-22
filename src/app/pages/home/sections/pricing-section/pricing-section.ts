import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { PricingCard } from '../../../../shared/components/pricing-card/pricing-card';

@Component({
    selector: 'app-pricing-section',
    standalone: true,
    imports: [CommonModule, SectionTitle, PricingCard],
    templateUrl: './pricing-section.html',
    styleUrl: './pricing-section.css',
})
export class PricingSection {
    offers = [
        {
            title: 'Permis B - Classique',
            price: '1100€',
            features: ['Code illimité (6 mois)', '20h de conduite', '1 présentation examen pratique', 'Livret d\'apprentissage'],
            isPopular: false,
            link: '/contact'
        },
        {
            title: 'Permis B - Accéléré',
            price: '1450€',
            features: ['Code en 3 jours', '20h de conduite (2 semaines)', 'Priorité examen', 'Suivi intensif'],
            isPopular: true,
            link: '/contact'
        },
        {
            title: 'Conduite Accompagnée',
            price: '1250€',
            features: ['Dès 15 ans', 'Code illimité', '20h de formation initiale', 'RDV pédagogiques inclus'],
            isPopular: false,
            link: '/contact'
        }
    ];
}
