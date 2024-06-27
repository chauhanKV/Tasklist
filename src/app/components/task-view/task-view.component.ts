import { Component, OnInit } from '@angular/core';
import { TaskViewMappingService } from '../../mapping/task-view-mapping.service';
import { DatePipe } from '@angular/common';
import { Task } from '../../models/tasklist.model';

@Component({
  selector: 'task-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.sass',
})
export class TaskViewComponent implements OnInit {
  constructor(private mappingService: TaskViewMappingService) {}

  tasks: Task[] | undefined;

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.mappingService.getAllTasks().subscribe({
      next: (_tasks: Task[]) => {
        this.tasks = _tasks;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
