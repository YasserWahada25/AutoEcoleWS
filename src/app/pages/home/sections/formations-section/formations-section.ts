import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
    selector: 'app-formations-section',
    standalone: true,
    imports: [CommonModule, SectionTitle],
    templateUrl: './formations-section.html',
    styleUrl: './formations-section.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormationsSection {
    // Slider Images (Placeholders)
    images: string[] =
        [
            'AutoEcole2.png',
            'AutoEcole3.png',
            'AutoEcole4.png',
            'AutoEcole5.png',
            'AutoEcole6.png',

        ];
    currentSlide = 0;

    // Advantages Data
    advantages = [
        {
            title: 'مدرب ذوو خبرة',
            description: 'مرافقة بيداغوجية ومتابعة شخصية طوال فترة التعلّم.',
            icon: '👨‍🏫'
        },
        {
            title: 'سيارة حديثة وآمنة',
            description: 'راحة وأمان أثناء التكوين والتدريب على السياقة.',
            icon: '🚗'
        },
        {
            title: 'برنامج مرن',
            description: 'مواقيت مناسبة (مساءً وعطلة نهاية الأسبوع).',
            icon: '📅'
        },
        {
            title: 'التحضير للامتحان',
            description: 'محاكاة ونصائح عملية لزيادة فرص النجاح.',
            icon: '🎓'
        }
    ];

    // Stats Data
    stats = [
        { value: '95%', label: 'نسبة النجاح' },
        { value: '10+', label: 'سنوات الخبرة' },
        { value: '500+', label: 'طالب تم تدريبهم' }
    ];

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    }

    goToSlide(index: number) {
        this.currentSlide = index;
    }
}
