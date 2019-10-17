import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../../service/persona-service.service';
import { Persona } from '../../model/persona';
import { TipoDocumentoIdentidad } from 'src/app/model/tipoDocumentoIdentidad';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private personaService: PersonaServiceService) { }

  ngOnInit() {
    this.personaService.listarEmpleados().subscribe(
      personas => {
          this.personas = personas;
      }
    );
  }

}
