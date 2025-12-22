import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef, NgZone, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, timer } from 'rxjs';
import { map, takeWhile, tap, finalize } from 'rxjs/operators';

@Component({
    selector: 'app-splash-screen',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './splash-screen.html',
    styleUrl: './splash-screen.css'
})
export class SplashScreenComponent implements OnInit {
    @Output() done = new EventEmitter<void>();

    // Property for the template
    progress = 0;
    opacity = 1;

    private destroyRef = inject(DestroyRef);

    constructor(
        private cdr: ChangeDetectorRef,
        private ngZone: NgZone
    ) { }

    ngOnInit() {
        this.startProgress();

        // Failsafe: Force finish after 5 seconds max
        timer(5000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            if (this.opacity > 0) {
                console.warn('Splash screen failsafe triggered');
                this.finish();
            }
        });
    }

    private startProgress() {
        const duration = 3000; // 3 seconds target
        const stepTime = 30; // Update every 30ms
        const totalSteps = duration / stepTime;
        let currentStep = 0;

        // Run outside Angular to avoid excessive change detection cycles if we were using CheckAlways,
        // but here we want to control it manually for smoothness.
        // Actually, running INSIDE zone is safer for bindings, but let's be explicit.

        interval(stepTime)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                map(() => {
                    currentStep++;
                    const ratio = currentStep / totalSteps;
                    // Cubic ease-out
                    return 1 - Math.pow(1 - ratio, 3);
                }),
                tap(ease => {
                    const val = Math.min(Math.round(ease * 100), 100);

                    // Force update inside Angular Zone
                    this.ngZone.run(() => {
                        this.progress = val;
                        console.log('progress', this.progress); // Debug as requested
                        this.cdr.markForCheck();
                    });
                }),
                takeWhile(() => this.progress < 100)
            )
            .subscribe({
                complete: () => {
                    this.ngZone.run(() => {
                        this.progress = 100;
                        this.cdr.markForCheck();
                        // Small delay at 100% before fading out
                        setTimeout(() => this.startFadeOut(), 300);
                    });
                }
            });
    }

    private startFadeOut() {
        this.opacity = 0;
        this.cdr.markForCheck();

        // Wait for CSS transition (0.5s) then emit done
        setTimeout(() => {
            this.finish();
        }, 500);
    }

    private finish() {
        this.done.emit();
    }
}
