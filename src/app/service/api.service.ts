import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string='https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.url}todos/1`)
  }
}
