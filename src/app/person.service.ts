import {Injectable} from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

import { Person } from './Models/Personen/Person';

@Injectable()
export class PersonService{

  constructor(private http: HttpClient){

  }

 /**
  getPersonen(): Promise<Person[]> {
        return this.http.get('api/Personen')
        .toPromise()
        .then(r=>r.json() as Person[]);

  }
  **/
}
