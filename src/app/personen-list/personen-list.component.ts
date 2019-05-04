import { Person } from './../Models/Personen/Person';
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
// import { PersonService2 } from "../person.service2";

@Component({
  selector: 'app-personen-list',
  template: `
    <h1>
      Versicherte Personen!
    </h1>

    <div class="row">
      <ul *ngFor="let person of Personen">
        <li>
          <div class="col">Vorname: {{ person.Vorname }}</div>
          <div class="col">Nachname: {{ person.Nachname }}</div>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class PersonenListComponent implements OnInit {
  public Personen = [];



 constructor(private _personService: PersonService) {}

  ngOnInit() {
    this._personService.getPersonen().subscribe(data => (this.Personen = data));
    console.log(this.Personen);
  }



/**
  constructor(private _personService: PersonService2) {}

  ngOnInit() {
    this._personService
      .getPersonen()
      .then(Personen => (this.Personen = Personen));
  }
*/
}
