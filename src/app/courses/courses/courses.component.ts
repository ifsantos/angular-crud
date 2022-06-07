import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CoursesRoutingModule } from '../courses-routing.module';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id', 'name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,

    ) {
    this.courses$ = this.loadCourses();
  }

  loadCourses(){
    return  this.coursesService.list().pipe(
      catchError(error => {
        this.openDialog('Erro ao carregar cursos')
        return of([])
      })
    );
  }

  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo:this.route});
  }
  onEdit(element: Course) {
    this.openDialog(JSON.stringify(element));
    
  }
  onDelete(element: Course) {
    this.coursesService.delete(element)
    .subscribe({
      complete: () => {
        this.snackBar.open('Deletado com sucesso','',{duration:3000});
        this.courses$ = this.loadCourses();
        // this.router.navigate(['courses']).then(() => {
        //   window.location.reload();
        // });
      }, 
      error: () => { this.snackBar.open('Erro ao Deletar', '', {duration:3000}); }
    });
  }
}
