import { Person } from "./../Models/Personen/Person";
import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";
// import { PersonService2 } from "../person.service2";

@Component({
  selector: "app-personen-list",
  template: `
    <h1>
      Versicherte Personen!
    </h1>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Vorname</th>
          <th scope="col">Nachname</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let person of Personen">
          <td>{{ person.Vorname }}</td>
          <td>{{ person.Nachname }}</td>
        </tr>
      </tbody>
    </table>


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
