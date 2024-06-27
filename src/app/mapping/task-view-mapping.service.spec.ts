import { TestBed } from '@angular/core/testing';

import { TaskViewMappingService } from './task-view-mapping.service';

describe('TaskViewMappingService', () => {
  let service: TaskViewMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskViewMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
