import { Component } from '@angular/core';
import { TaskViewComponent } from '../task-view/component/task-view.component';

@Component({
  selector: 'tasklist-main',
  standalone: true,
  imports: [TaskViewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
})
export class MainComponent {}
