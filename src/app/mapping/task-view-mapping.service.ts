import { Injectable } from '@angular/core';
import { TaskViewService } from '../service/task-view.service';
import { Observable, map } from 'rxjs';
import { Task } from '../models/tasklist.model';
import { CamundaTask } from '../models/camunda.model';

@Injectable({
  providedIn: 'root',
})
export class TaskViewMappingService {
  constructor(private taskViewService: TaskViewService) {}

  getAllTasks(): Observable<Task[]> {
    return this.taskViewService.getAllTasks().pipe(
      map((tasks: CamundaTask[]) => {
        return tasks
          .map((task: CamundaTask) => {
            return {
              id: task.id,
              name: task.name,
              creationDate: task.creationDate,
              completionDate: task.completionDate,
              assignee: task.assignee,
              taskState: task.taskState,
              processName: task.processName,
            };
          })
          .filter((taskDetails) => taskDetails.taskState != 'COMPLETED');
      })
    );
  }
}
