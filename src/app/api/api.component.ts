import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubApiService } from '../github-api.service'; // Adjust path as necessary
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  repos: any[] = [];
  paginatedRepos: any[] = [];
  page: number = 1;
  perPage: number = 5;
  totalPages: number = 1;
  username: string = 'angular'; // Default GitHub username

  constructor(private githubService: GithubApiService) { }

  ngOnInit(): void {
    this.fetchRepos();
  }

  fetchRepos(): void {
    this.githubService.fetchRepos(this.username).subscribe(
      (data: any) => {
        this.repos = data;
        this.totalPages = Math.ceil(this.repos.length / this.perPage);
        this.updatePaginatedRepos();
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }

  updatePaginatedRepos() {
    const startIndex = (this.page - 1) * this.perPage;
    this.paginatedRepos = this.repos.slice(startIndex, startIndex + this.perPage);
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePaginatedRepos();
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.updatePaginatedRepos();
    }
  }
}
