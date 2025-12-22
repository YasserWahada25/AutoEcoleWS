import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './sections/hero-section/hero-section';
import { WhyUsSection } from './sections/why-us-section/why-us-section';
import { FormationsSection } from './sections/formations-section/formations-section';
import { PricingSection } from './sections/pricing-section/pricing-section';
import { InstructorsSection } from './sections/instructors-section/instructors-section';
import { VehiclesSection } from './sections/vehicles-section/vehicles-section';
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
    PricingSection,
    InstructorsSection,
    VehiclesSection,
    ContactSection,
    CtaSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Logic moved to individual sections
}
