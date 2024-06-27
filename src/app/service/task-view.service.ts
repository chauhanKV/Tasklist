import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CamundaTask } from '../models/camunda.model';

@Injectable({
  providedIn: 'root',
})
export class TaskViewService {
  constructor(private http: HttpClient) {}

  // add in .env file
  serviceURL = 'http://localhost:8080/';

  getAllTasks(): Observable<CamundaTask[]> {
    return this.http.post<CamundaTask[]>(
      this.serviceURL + 'tasklistApi/getAllTask',
      {}
    );
  }
}
