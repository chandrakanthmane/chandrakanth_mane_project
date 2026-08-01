import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { GithubApiService } from '../../github-api.service';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { PROFILE } from '../../core/portfolio-data';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Python: '#3572A5',
  Java: '#b07219',
  Shell: '#89e051',
};

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent implements OnInit {
  username = PROFILE.githubUsername;
  repos: Repo[] = [];
  visibleRepos: Repo[] = [];
  loading = false;
  error = '';
  visibleCount = 6;

  constructor(private githubService: GithubApiService) {}

  ngOnInit(): void {
    this.fetchRepos();
  }

  fetchRepos(): void {
    if (!this.username.trim()) return;
    this.loading = true;
    this.error = '';

    this.githubService.fetchRepos(this.username.trim()).subscribe({
      next: (data: Repo[]) => {
        this.repos = (data || []).sort((a, b) => b.stargazers_count - a.stargazers_count);
        this.visibleCount = 6;
        this.updateVisible();
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.repos = [];
        this.visibleRepos = [];
        this.error = err.status === 404 ? 'No GitHub user found with that username.' : 'Could not load repositories right now.';
        this.loading = false;
      },
    });
  }

  showMore(): void {
    this.visibleCount += 6;
    this.updateVisible();
  }

  private updateVisible(): void {
    this.visibleRepos = this.repos.slice(0, this.visibleCount);
  }

  langColor(language: string | null): string {
    return language ? LANGUAGE_COLORS[language] ?? '#7c5cff' : '#626b82';
  }
}
