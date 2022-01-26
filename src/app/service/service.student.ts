import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/students';

@Injectable({
  providedIn: 'root',
})
export class httpService {
  Url: string = 'https://hp-api.herokuapp.com/api/characters/students';

  constructor(private http: HttpClient) {}
  
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.Url);
  }
}