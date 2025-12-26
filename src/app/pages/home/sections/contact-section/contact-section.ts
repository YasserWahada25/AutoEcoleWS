import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { ReservationService } from '../../../../core/services/reservation.service';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [CommonModule, SectionTitle, ReactiveFormsModule],
    templateUrl: './contact-section.html',
    styleUrl: './contact-section.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSection implements OnInit {
    mapUrl: SafeResourceUrl | undefined;
    googleMapsLink = 'https://maps.app.goo.gl/PBsFLsi97mzo35rw7';

    reservationForm: FormGroup;
    isLoading = false;
    successMessage = '';
    errorMessage = '';

    constructor(
        private sanitizer: DomSanitizer,
        private fb: FormBuilder,
        private reservationService: ReservationService
    ) {
        this.reservationForm = this.fb.group({
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            message: [''],
            honeypot: ['']
        });
    }

    ngOnInit() {
        const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.9789482367846!2d8.798339375192464!3d34.401880999188705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f897af732c93e7%3A0x9a957e107224f943!2sAuto-%C3%A9cole%20Saber-benammar!5e0!3m2!1sfr!2stn!4v1766360756767!5m2!1sfr!2stn';
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    onSubmit() {
        if (this.reservationForm.invalid) {
            this.reservationForm.markAllAsTouched();
            return;
        }

        if (this.reservationForm.get('honeypot')?.value) {
            return;
        }

        this.isLoading = true;
        this.successMessage = '';
        this.errorMessage = '';

        const formData = {
            ...this.reservationForm.value,
            source: 'Website Home Contact',
            userAgent: navigator.userAgent
        };

        delete formData.honeypot;

        this.reservationService.sendReservation(formData).subscribe({
            next: (response) => {
                this.isLoading = false;
                if (response && response.success) {
                    this.successMessage = 'تم إرسال طلبك بنجاح ✅';
                    this.reservationForm.reset();
                } else {
                    this.errorMessage = response.error || 'حدث خطأ، الرجاء المحاولة مرة أخرى';
                }
            },
            error: (error) => {
                this.isLoading = false;
                this.errorMessage = error.message || 'حدث خطأ، الرجاء المحاولة مرة أخرى';
            }
        });
    }
}
