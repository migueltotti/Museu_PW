import { UsuarioCreate, UsuarioResponse, UsuarioUpdate } from "../../schema/usuario-schemas";
import { ConnectionService } from "./ConnectionService";

export class UsuarioService extends ConnectionService<UsuarioResponse, UsuarioCreate, UsuarioUpdate> {
  constructor(entity: string){
    super(entity);
  }
}