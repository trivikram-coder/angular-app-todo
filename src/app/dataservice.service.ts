import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  private baseUrl="https://todolistserver-xsyr.onrender.com"
  constructor(private http:HttpClient) { }
  getTasks():Observable<any>{
    return this.http.get(`${this.baseUrl}/tasks`);
  }
  addTask(task:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/add`,{task});
  }
  deleteTask(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/remove/${id}`)
  }
}
