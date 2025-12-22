import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-instructors-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './instructors-section.html',
    styleUrl: './instructors-section.css'
})
export class InstructorsSection {
    instructors = [
        {
            name: 'صابر بنعمار',
            role: 'مدرب سياقة (سيارات و دراجات نارية)',
            experience: '15 سنة من الخبرة',
            description: 'شغوف بالسلامة المرورية، سيرافقك صابر بكل صبر وبأسلوب تعليمي فعّال.',
            image: 'moniteurs/saber.jpg'
        },
        {
            name: 'صابر بنعمار',
            role: 'مدرب سياقة (سيارات و دراجات نارية)',
            experience: '15 سنة من الخبرة',
            description: 'شغوف بالسلامة المرورية، سيرافقك صابر بكل صبر وبأسلوب تعليمي فعّال.',
            image: 'moniteurs/saber.jpg'
        },
        {
            name: 'صابر بنعمار',
            role: 'مدرب سياقة (سيارات و دراجات نارية)',
            experience: '15 سنة من الخبرة',
            description: 'شغوف بالسلامة المرورية، سيرافقك صابر بكل صبر وبأسلوب تعليمي فعّال.',
            image: 'moniteurs/saber.jpg'
        }
    ];
}
