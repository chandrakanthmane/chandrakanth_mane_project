import { Component, HostListener, OnDestroy, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/theme.service';
import { PROFILE } from './core/portfolio-data';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly profile = PROFILE;

  navLinks: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  isMenuOpen = false;
  isScrolled = false;
  scrollProgress = 0;
  showBackToTop = false;
  activeSection = signal('home');

  private observer?: IntersectionObserver;
  private year = new Date().getFullYear();
  currentYear = this.year;

  constructor(public themeService: ThemeService) {}

  ngAfterViewInit(): void {
    this.setupScrollSpy();
  }

  private setupScrollSpy(): void {
    const sections = this.navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => !!el);

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => this.observer!.observe(section));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.isScrolled = scrollTop > 24;
    this.showBackToTop = scrollTop > 600;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  scrollTo(id: string): void {
    this.closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
