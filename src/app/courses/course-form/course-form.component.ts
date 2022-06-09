import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
              private service: CoursesService, 
              private snackBar: MatSnackBar,
              private location: Location,
              private router: Router) {

    var formValues = {
      _id: [null],
      name: [null],
      category: [null]
    }

    var courseValues: any = this.router.getCurrentNavigation()?.extras.state;

    if (courseValues) {
      formValues._id = courseValues._id;
      formValues.name = courseValues.name;
      formValues.category = courseValues.category;
    }
    
    this.form = this.formBuilder.group(formValues);
  }

  ngOnInit(): void {
    // constructor(private route: ActivatedRoute, private router: Router) {
    //   this.route.queryParams.subscribe(params => {
    //     if (this.router.getCurrentNavigation().extras.state) {
    //       this.data = this.router.getCurrentNavigation().extras.state.user;
    //     }
    //   });
    // }
  }
  
  onSubmit(){
    this.service.save(this.form.value).subscribe(
      {
        next: e => {this.onSuccess()}, 
        error: e => {this.onError()}
      });
  }
  
  onCancel(){
    this.location.back();
  }

  onSuccess(){
    this.snackBar.open('Curso salvo com sucesso','',{duration:3000});
    this.onCancel();
  }
  
  onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration:3000});
  }
}
