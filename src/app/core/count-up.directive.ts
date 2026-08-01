import { Directive, ElementRef, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input('appCountUp') target = 0;
  @Input() suffix = '';
  @Input() duration = 1600;

  private observer?: IntersectionObserver;
  private started = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.textContent = `0${this.suffix}`;

    if (!('IntersectionObserver' in window)) {
      this.run();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.started) {
            this.started = true;
            this.run();
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(node);
  }

  private run(): void {
    const node = this.el.nativeElement;
    const start = performance.now();
    const target = this.target;

    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      node.textContent = `${value}${this.suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
