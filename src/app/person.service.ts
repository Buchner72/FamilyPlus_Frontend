import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Person } from "./Models/Personen/Person";
import { Person } from "./Models/Personen/VTVP";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/toPromise"; //Aus einem Observable ein Promise machen

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  //Info - swager http://localhost:57375/swagger
  private _url: string = "//localhost:57375/api/VTVP";      //VTVP Personen aus der Vertragsklasse VerTragVersichertePersonen
  //  private _url: string = "//localhost:57375/api/Personen";
   // private _url:string = "/assets/data/employees.json"   //gut für Test

  // Zugriff API
  getPersonen(): Observable<Person[]> {
    return this.http.get<Person[]>(this._url);
  }
}
