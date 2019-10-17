import { TipoDocumentoIdentidad } from './tipoDocumentoIdentidad';

export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  nroDocumento: string;
  tipoDocumentoIdentidad = new TipoDocumentoIdentidad();
  correo: string;
}


