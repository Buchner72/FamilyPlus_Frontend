/**
Diese Art bitte nicht mehr verwenden, obwohl es in älteren Tutorials  öfters verwendet
Anb Abgular Version 7 nicht mehr verwenden

import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Person } from "./Models/Personen/Person";

import 'rxjs/add/operator/toPromise' //Aus einem Observable ein Promise machen


@Injectable()
export class PersonService2 {
  constructor(private http: Http){

  }

  private _url:string = "//localhost:49608/api/Personen"
  // private _url:string = "/assets/data/employees.json"

  getPersonen(): Promise<Person[]>{
    return this.http.get(this._url)
      .toPromise()
      .then (r => r.json() as Person[]);
  }

}
// tslint:disable-next-line: jsdoc-format
*/
