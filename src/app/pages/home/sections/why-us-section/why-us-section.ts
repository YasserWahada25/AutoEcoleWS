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
    features = [
        { title: 'Moniteurs Certifiés', description: 'Une équipe pédagogique expérimentée et diplômée d\'État.', icon: '👨‍🏫' },
        { title: 'Véhicules Récents', description: 'Apprenez à conduire sur des véhicules modernes et sécurisés.', icon: '🚗' },
        { title: 'Planning Flexible', description: 'Des horaires adaptés à votre emploi du temps (soirs et weekends).', icon: '📅' },
        { title: 'Suivi Personnalisé', description: 'Une progression adaptée à votre rythme pour garantir votre réussite.', icon: '📈' }
    ];
}
