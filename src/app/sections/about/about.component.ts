import { Component } from '@angular/core';
import { PROFILE, STATS } from '../../core/portfolio-data';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { CountUpDirective } from '../../core/count-up.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, CountUpDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly stats = STATS;

  highlights = [
    { icon: 'fa-solid fa-layer-group', title: 'End-to-End Ownership', text: 'From UX and API design to database schema and cloud deployment.' },
    { icon: 'fa-solid fa-people-group', title: 'Team Leadership', text: 'Led teams of up to 20 engineers with structured code reviews and mentoring.' },
    { icon: 'fa-solid fa-gauge-high', title: 'Performance Focus', text: 'Consistently cut load times and bug rates by 25-40% across projects.' },
    { icon: 'fa-solid fa-arrows-spin', title: 'Agile Delivery', text: 'Sprint planning, standups, and retrospectives baked into every release.' },
  ];
}
