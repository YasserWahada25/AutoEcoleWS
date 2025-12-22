import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
    selector: 'app-instructors-section',
    standalone: true,
    imports: [CommonModule, SectionTitle],
    templateUrl: './instructors-section.html',
    styleUrl: './instructors-section.css',
})
export class InstructorsSection {
    instructors = [
        { name: 'Karim B.', role: 'Moniteur Auto', experience: '15 ans', bio: 'Passionné par la sécurité routière, Karim vous accompagnera avec patience et pédagogie.' },
        { name: 'Sarah L.', role: 'Monitrice Auto & Moto', experience: '8 ans', bio: 'Spécialiste du permis moto, Sarah est reconnue pour son dynamisme et son expertise.' },
        { name: 'Marc D.', role: 'Moniteur Auto', experience: '12 ans', bio: 'Marc excelle dans la formation accélérée et la remise à niveau.' },
        { name: 'Julie P.', role: 'Responsable Pédagogique', experience: '20 ans', bio: 'Julie supervise l\'équipe et veille à la qualité de l\'enseignement.' }
    ];
}
