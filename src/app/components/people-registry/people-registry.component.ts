import { Persona } from './../../model/persona';
import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from 'src/app/service/persona-service.service';
import { TipoDocumentoIdentidad } from 'src/app/model/tipoDocumentoIdentidad';

@Component({
  selector: 'app-people-registry',
  templateUrl: './people-registry.component.html',
  styleUrls: ['./people-registry.component.css']
})
export class PeopleRegistryComponent implements OnInit {

  documentos: TipoDocumentoIdentidad[] = [];
  document: any;

  persona: any;

  tt: any;
  constructor(private personaService: PersonaServiceService) {
  this.persona = new Persona();
   }

  ngOnInit() {
    this.personaService.listarDocumentos().subscribe(
      documentos => {
          this.documentos = documentos;
          console.log(this.documentos);
      }
    );
  }


  guardar() {
    console.log(this.persona);
    this.personaService.insertPersona(this.persona).subscribe(data => {
      alert('correcto');
    });
  }
}
