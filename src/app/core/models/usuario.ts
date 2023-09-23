export class Usuario {
  public uid: string;
  private _nombre: string;
  private _correo: string;
  private _clave?: string;

  constructor(correo: string, clave: string, nombre: string) {
    this.correo = correo;
    this.clave = clave;
    this.nombre = nombre;
  }

  get correo() {
    return this._correo;
  }
  set correo(newData: string) {
    newData = newData.trim();

    if (newData === '') {
      throw 'El correo no puede estar vacío.';
    }
    this._correo = newData;
  }

  get clave() {
    return this._clave;
  }
  set clave(newData: string) {
    newData = newData.trim();

    if (newData === '') {
      throw 'La clave no puede estar vacía.';
    }
    this._clave = newData;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(newData: string) {
    newData = newData.trim();

    if (newData === '') {
      throw 'El nombre no puede estar vacío.';
    }
    this._nombre = newData;
  }

  Entrar() {
    if (JSON.stringify(this) !== localStorage.getItem('Usuario')) {
      throw 'Revise si los datos son los correctos.';
    }
  }
}
