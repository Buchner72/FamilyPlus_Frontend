import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-plus',
  templateUrl: './family-plus.component.html',
  styles: []
})
export class FamilyPlusComponent implements OnInit {
  title = 'FamilyPlus';


  constructor() { }

  ngOnInit() {
  }

  MenueAnsicht(er: number) {
    console.log(er + '-Erwachsene Person/nen');
  }

}
