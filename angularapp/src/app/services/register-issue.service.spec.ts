import { TestBed } from '@angular/core/testing';

import { RegisterIssueService } from './register-issue.service';

describe('RegisterIssueService', () => {
  let service: RegisterIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
