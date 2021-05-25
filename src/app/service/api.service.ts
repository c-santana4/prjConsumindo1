import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private api = 'http://localhost/Atividade_PAM';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.api}/selectUser.php`);
  }
  insertData({name, email}: any){
    const options = {responseType: 'text' as 'json' };
    return this.http.post(`${this.api}/insertUser.php`, {name, email}, options);
  }
}
