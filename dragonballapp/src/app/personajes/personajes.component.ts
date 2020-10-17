import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  
  personajes:Personaje[];
  constructor(private perService:PersonajesService) { }

  ngOnInit(): void {
    this.perService.getPersonajes().subscribe(hectorin=>this.personajes=hectorin);
  }

}
