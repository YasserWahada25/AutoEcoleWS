import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './sections/hero-section/hero-section';
import { WhyUsSection } from './sections/why-us-section/why-us-section';
import { FormationsSection } from './sections/formations-section/formations-section';
import { InstructorsSection } from './sections/instructors-section/instructors-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { CtaSection } from './sections/cta-section/cta-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSection,
    WhyUsSection,
    FormationsSection,
    InstructorsSection,
    ContactSection,
    CtaSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  // Logic moved to individual sections
}
