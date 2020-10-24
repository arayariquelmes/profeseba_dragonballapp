import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { PersonajesService } from '../services/personajes.service';
import {MessageService} from 'primeng/api';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  
  personajes:Personaje[];
  error:string ="";
  mostrarDialogo:boolean = false;
  personaje:Personaje;
  constructor(private perService:PersonajesService, private mesService:MessageService) { }

  mostrarPersonaje(personaje:Personaje){
    this.personaje = personaje;
    this.mostrarDialogo = true;
  }

  getImagenPersonaje(personaje:Personaje): string{
    return personaje.image.includes("http") ? personaje.image: `${environment.directorioImagenes}${personaje.image}`
  }

  async ngOnInit() {
    try{
      this.personajes = await this.perService.getPersonajes().toPromise();
      this.error = "";
      this.mesService.clear();//Limpia los mensajes del toast
    }catch(e){
      this.error = e.statusText;
      this.mesService.add({severity:'error', summary:'Ha ocurrido un error'
        , detail:this.error, sticky:true,closable:false});
    }
  }

}
