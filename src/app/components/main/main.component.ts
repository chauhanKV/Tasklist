import { Component } from '@angular/core';
import { TaskViewComponent } from '../task-view/task-view.component';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'tasklist-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
  imports: [TaskViewComponent, TaskDetailsComponent],
})
export class MainComponent {}
