import { Injectable } from '@angular/core';
import { TaskViewService } from '../service/task-view.service';
import { Observable, map } from 'rxjs';
import { Task } from '../../models/tasklist.model';

@Injectable({
  providedIn: 'root',
})
export class TaskViewMappingService {
  constructor(private taskViewService: TaskViewService) {}

  getTasks(taskID: String): Observable<Task> {
    return this.taskViewService.getTasks(taskID).pipe(
      map((task) => {
        return {
          id: task.id,
          name: task.name,
          creationDate: task.creationDate,
          completionDate: task.completionDate,
          assignee: task.assignee,
          taskState: task.taskState,
        };
        // return tasks.map((task) => {
        // return {
        //   id: task.id,
        //   name: task.name,
        //   creationDate: task.creationDate,
        //   completionDate: task.completionDate,
        //   assignee: task.assignee,
        //   taskState: task.taskState,
        // };
        // });
      })
    );
  }
}
