import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/api/courses';

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      //delay(0),
      tap(console.log)
    );
  }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  delete(element: Course){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: element
    };
    return this.httpClient.delete(this.API, options).pipe(first());
  }

}
