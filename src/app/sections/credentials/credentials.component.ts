import { Component } from '@angular/core';
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from '../../core/portfolio-data';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.css',
})
export class CredentialsComponent {
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
  readonly achievements = ACHIEVEMENTS;
}
