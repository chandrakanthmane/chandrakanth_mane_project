import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  repos: any[] = [];
  paginatedRepos: any[] = [];
  page: number = 1;
  perPage: number = 5;
  totalPages: number = 1;
  username: string = 'angular'; // Default GitHub username

  constructor(private http: HttpClient) {
   
    this.fetchRepos(); // Fetch repos on component load
  }

  fetchRepos() {
    this.http.get(`https://api.github.com/users/${this.username}/repos`).subscribe((data: any) => {
      this.repos = data;
      this.totalPages = Math.ceil(this.repos.length / this.perPage);
      this.updatePaginatedRepos();
    });
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
