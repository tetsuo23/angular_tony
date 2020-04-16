import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  create() {
    console.log("service: create");
    this.http.post<{ message: string }>(environment.apiUrl + '/api/crud', {})

      //<{message: string}> on défini le type de retour d'appelle http pour eviter une erreur avec "console.log(response.message)"

      .subscribe(response => {
        console.log("service: create response");
        console.log(response.message);
      });
  }
  read() {
    console.log("service: read");
    this.http.get<{ message: string }>(environment.apiUrl + '/api/crud', {})
      .subscribe(response => {
        console.log("service: read response");
        console.log(response.message);
      });
  }
  update() {
    console.log("service: update");
    this.http.put<{ message: string }>(environment.apiUrl + '/api/crud', {})
      .subscribe(response => {
        console.log("service: update response");
        console.log(response.message);
      });
  }
  delete() {
    console.log("service: delete");
    this.http.delete<{ message: string }>(environment.apiUrl + '/api/crud', {})
      .subscribe(response => {
        console.log("service: delete response");
        console.log(response.message);
      });
  }


}
