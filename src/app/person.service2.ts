import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Person } from "./Models/Personen/Person";

import 'rxjs/add/operator/toPromise' //Aus einem Observable ein Promise machen


@Injectable()
export class PersonService2 {
  constructor(private http: Http){

  }

  private _url:string = "//localhost:49608/api/Personen"
  getPersonen(): Promise<Person[]>{
    return this.http.get(this._url)
      .toPromise()
      .then (r => r.json() as Person[]);
  }

}
