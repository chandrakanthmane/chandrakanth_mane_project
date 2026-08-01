import { Component, OnDestroy, OnInit } from '@angular/core';
import { PROFILE } from '../../core/portfolio-data';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  typedText = '';

  private words = PROFILE.taglineWords;
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.tick();
  }

  private tick(): void {
    const currentWord = this.words[this.wordIndex];
    const typingSpeed = this.deleting ? 45 : 85;

    if (!this.deleting && this.charIndex <= currentWord.length) {
      this.typedText = currentWord.slice(0, this.charIndex);
      this.charIndex++;
    } else if (this.deleting && this.charIndex >= 0) {
      this.typedText = currentWord.slice(0, this.charIndex);
      this.charIndex--;
    }

    let delay = typingSpeed;

    if (!this.deleting && this.charIndex > currentWord.length) {
      this.deleting = true;
      delay = 1400;
    } else if (this.deleting && this.charIndex < 0) {
      this.deleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.charIndex = 0;
      delay = 300;
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  scrollToId(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
