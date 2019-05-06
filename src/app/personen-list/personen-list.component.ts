import { Person } from "./../Models/Personen/Person";
// import { PersonService2 } from "../person.service2";

import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";

@Component({
  selector: "app-personen-list",
  template: `
    <h1>
      Versicherte Personen!
    </h1>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Vorname</th>
          <th scope="col">Nachname</th>
          <th scope="col">Aktion(event-binding)</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let person of Personen; let i = index">
          <td>{{ i }}</td>
          <td>{{ person.Vorname }}</td>
          <td>{{ person.Nachname }}</td>
          <td>
            <button (click)="PersonClick()" class="btn btn-outline-primary">
              Bearbeiten
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class PersonenListComponent implements OnInit {
  public Personen = [];
  // pers: Person; // Wird hier noch nicht benötigt da ja: "let person of Personen"

  constructor(private _personService: PersonService) {}

  ngOnInit() {
    this._personService.getPersonen().subscribe(data => (this.Personen = data));
    console.log(this.Personen);
  }

  PersonClick() {
    console.log("Auf eine Person wurde geklickt");
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
