import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { GithubApiService } from './github-api.service';

describe('GithubApiService', () => {
  let service: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(GithubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
