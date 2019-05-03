import {Injectable} from '@angular/core';

import { HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

import { Person } from './Models/Personen/Person';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService{

  constructor(private http: HttpClient){

  }

  getPersonen():Observable<Person[]>{
    return this.http.get<Person[]>('api/Personen');
  }

 /**
  getPersonen(): Promise<Person[]> {
        return this.http.get('api/Personen')
        .toPromise()
        .then(r=>r.json() as Person[]);

  }
  **/
}
