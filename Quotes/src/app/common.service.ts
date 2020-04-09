import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  saveUser(user){
    return this.http.post('http://localhost:8080/api/saveUser/', user)
      .map((response: Response) => response.json())
  }

  getUser() {
    return this.http.post('http://localhost:8080/api/getUser/', null)
      .map((response: Response) => response.json())
  }

  deleteUser(id) {
    return this.http.post('http://localhost:8080/api/deleteUser/', {'id': id})
      .map((response: Response) => response.json())
  }
}
