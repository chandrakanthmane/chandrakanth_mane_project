// src/app/github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private baseUrl: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  fetchRepos(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}/repos?sort=updated&per_page=100`);
  }

  fetchProfile(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}

