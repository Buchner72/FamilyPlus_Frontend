import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-personen-list',
  template: `
    <p>
      personen-list works!
    </p>
    <ul *ngFor="let person of Personen">
      <li>{{person.Vorname}}</li>
    </ul>
  `,
  styles: []
})
export class PersonenListComponent implements OnInit {

  public Personen = []

  constructor(private _personService: PersonService){}

  ngOnInit() {
    this._personService.getPersonen()
    .subscribe(data => this.Personen = data);
    console.log(this.Personen);
  }

}
