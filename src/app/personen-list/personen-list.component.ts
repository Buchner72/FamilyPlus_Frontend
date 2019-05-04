import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";

@Component({
  selector: "app-personen-list",
  template: `
    <p>
      personen-list works!
    </p>

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
}
