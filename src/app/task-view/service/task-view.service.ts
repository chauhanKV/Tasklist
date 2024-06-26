import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CamundaTask } from '../../models/camunda.model';

@Injectable({
  providedIn: 'root',
})
export class TaskViewService {
  //http = inject(HttpClient);

  constructor(private http: HttpClient) {}

  serviceURL = 'http://localhost:8080/';

  // Replace this API with get all tasks API url
  getTasks(taskID: String): Observable<CamundaTask> {
    return this.http.get<CamundaTask>(
      this.serviceURL + 'tasklistApi/getTaskDetails/' + taskID
    );
  }
}
