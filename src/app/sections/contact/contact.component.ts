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
  readonly profile = PROFILE;
  contactForm: FormGroup;
  sent = false;

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

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.contactForm.value;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${this.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    this.sent = true;
    this.contactForm.reset();
    setTimeout(() => (this.sent = false), 5000);
  }
}
