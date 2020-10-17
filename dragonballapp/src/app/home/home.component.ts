import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulo:string;
  muertesKrilin:string[] = ["Contra Tambourine de dragon ball"
  , "Contra Freezer", "Contra majin boo", "En gt pero no cuenta"];
  constructor() { }
  //En esta parte agrego codigo cuando la página se carga
  ngOnInit(): void {
    this.titulo = "Esto esta definido desde typescript";
  }

}
