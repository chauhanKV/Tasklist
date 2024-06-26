import { Component, OnInit } from '@angular/core';
import { TaskViewMappingService } from '../mapping/task-view-mapping.service';
import { map } from 'rxjs';
import { CamundaTask } from '../../models/camunda.model';
import { HttpClient } from '@angular/common/http';
import { Task } from 'zone.js/lib/zone-impl';

@Component({
  selector: 'task-view',
  standalone: true,
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.sass',
})
export class TaskViewComponent implements OnInit {
  constructor(
    private mappingService: TaskViewMappingService,
    private http: HttpClient
  ) {}

  task: any;

  ngOnInit() {
    this.mappingService.getTasks('2251799813694393').subscribe(
      (data) => {
        this.task = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    // this.http.get(
    //   'http://localhost:8080/tasklistApi/getTaskDetails/2251799813694393'
    // );
    // .subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }

    // debugger;
    // this.mappingService.getTasks('2251799813695841').pipe(
    //   map((task) => {
    //     console.log(task);
    //   })
    // );
  }
}
