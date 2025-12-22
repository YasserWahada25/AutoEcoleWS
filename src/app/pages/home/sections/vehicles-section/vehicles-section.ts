import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
    selector: 'app-vehicles-section',
    standalone: true,
    imports: [CommonModule, SectionTitle],
    templateUrl: './vehicles-section.html',
    styleUrl: './vehicles-section.css',
})
export class VehiclesSection {
    vehicles = [
        { name: 'Peugeot 208', type: 'Manuelle', fuel: 'Essence', year: '2023' },
        { name: 'Renault Clio V', type: 'Manuelle', fuel: 'Diesel', year: '2022' },
        { name: 'Toyota Yaris', type: 'Automatique', fuel: 'Hybride', year: '2023' },
        { name: 'Citroën C3', type: 'Manuelle', fuel: 'Essence', year: '2021' },
        { name: 'Yamaha MT-07', type: 'Moto A2', fuel: 'Essence', year: '2023' }
    ];
}
