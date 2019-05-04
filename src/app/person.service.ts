import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "./Models/Personen/Person";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

 private _url:string = "//localhost:49608/api/Personen"
// private _url:string = "/assets/data/employees.json"

getPersonen(): Observable<Person[]> {
  return this.http.get<Person[]>(this._url);
}

/**
  getPersonen(): Observable<Person[]> {
    return this.http.get<Person[]>("api/Personen");
  }
 */

/**
  getPersonen2(): Promise<Person[]> {
        return this.http.get('api/Personen')
        .toPromise()
        .then(r=>r.json() as Person[]);

  }
 */


}
