import { Component } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { GithubComponent } from '../sections/github/github.component';
import { CredentialsComponent } from '../sections/credentials/credentials.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    GithubComponent,
    CredentialsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
