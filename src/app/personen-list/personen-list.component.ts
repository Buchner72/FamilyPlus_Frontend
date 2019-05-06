import { Person } from "./../Models/Personen/Person";
// import { PersonService2 } from "../person.service2";

import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";

@Component({
  selector: "app-personen-list",
  template: `

    <div class="container">
      <h1>
      Versicherte Personen!
    </h1>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Vorname</th>
            <th scope="col">Nachname</th>
            <th scope="col">IsKind</th>
            <th scope="col">PraemieFP</th>
            <th scope="col">AdresseId</th>
            <th scope="col">Aktion(event-binding)</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let person of Personen; let i = index">
            <!-- <td>{{ i }}</td> -->
            <td>{{ person.Id }}</td>
            <td>{{ person.Vornamne }}</td>
            <td>{{ person.Nachname }}</td>
            <td>{{ person.IsKind }}</td>
            <td>{{ person.PraemieFP }}</td>
            <td>{{ person.AdresseId }}</td>
            <td>
              <button (click)="PersonClick(i)" class="btn btn-outline-primary">
                Bearbeiten
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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

  PersonClick(Index: number) {
    console.log(
      "Es wurde auf die Person mit dem Index " + (Index + 1) + " geklickt!"
    );
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
