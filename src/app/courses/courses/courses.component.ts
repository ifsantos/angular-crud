import { Component, OnInit, NgModule } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['name', 'category'];

  constructor() { 
    this.courses = [{_id: '1', name: 'Anguler', category: 'front-end'}];
  }

  ngOnInit(): void {
  }
}
