import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "./Models/Personen/Person";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/toPromise"; //Aus einem Observable ein Promise machen

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  //  private _url: string = "//localhost:57375/api/Personen";   //swager http://localhost:57375/swagger
    private _url:string = "/assets/data/employees.json"   //gut für Test

  getPersonen(): Observable<Person[]> {
    return this.http.get<Person[]>(this._url);
  }
}
