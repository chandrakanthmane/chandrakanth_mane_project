import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../core/portfolio-data';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly formspreeEndpoint = 'https://formspree.io/f/xykrqdyv';

  readonly profile = PROFILE;
  contactForm: FormGroup;
  sending = false;
  sent = false;
  error = false;

  contactCards = [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: PROFILE.location, href: null },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.error = false;

    try {
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(this.contactForm.value),
      });

      if (!response.ok) throw new Error('Form submission failed');

      this.sent = true;
      this.contactForm.reset();
      setTimeout(() => (this.sent = false), 5000);
    } catch {
      this.error = true;
      setTimeout(() => (this.error = false), 5000);
    } finally {
      this.sending = false;
    }
  }
}
