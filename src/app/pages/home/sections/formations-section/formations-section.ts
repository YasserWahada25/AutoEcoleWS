import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { ServiceCard } from '../../../../shared/components/service-card/service-card';

@Component({
    selector: 'app-formations-section',
    standalone: true,
    imports: [CommonModule, SectionTitle, ServiceCard],
    templateUrl: './formations-section.html',
    styleUrl: './formations-section.css',
})
export class FormationsSection {
    formations = [
        {
            title: 'Permis B (Manuel)',
            description: 'La formation classique pour apprendre à conduire une voiture à boîte manuelle.',
            icon: '🚗',
            points: ['Code de la route', '20h de conduite minimum', 'Passage de l\'examen']
        },
        {
            title: 'Permis B (Automatique)',
            description: 'Une formation simplifiée et plus rapide sur boîte automatique.',
            icon: '🚙',
            points: ['Code de la route', '13h de conduite minimum', 'Passage de l\'examen']
        },
        {
            title: 'Conduite Accompagnée (AAC)',
            description: 'Dès 15 ans, gagnez en expérience avant le permis.',
            icon: '👨‍👩‍👧‍👦',
            points: ['Formation initiale', '3000km avec accompagnateur', 'RDV pédagogiques']
        },
        {
            title: 'Conduite Supervisée',
            description: 'Pour les plus de 18 ans souhaitant acquérir de l\'expérience.',
            icon: '👀',
            points: ['Après formation initiale', 'Conduite avec accompagnateur', 'Sans durée minimale']
        },
        {
            title: 'Permis Moto (A2)',
            description: 'Pour conduire des motos d\'une puissance n\'excédant pas 35 kW.',
            icon: '🏍️',
            points: ['Code moto', 'Plateau', 'Circulation']
        },
        {
            title: 'Remise à Niveau',
            description: 'Reprenez confiance au volant après une longue période sans conduire.',
            icon: '🔄',
            points: ['Évaluation personnalisée', 'Séances à la carte', 'Perfectionnement']
        }
    ];
}
