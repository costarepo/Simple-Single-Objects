export class Pistola {
  construtor(numeroSerie, modelo) {
    this._numeroSerie = numeroSerie;
    this._modelo = modelo;
    this._municao = 0;
    this._trava = true;
    this._gatilho = false;
  }
  get numeroSerie() {
    return this._numeroSerie;
  }
  get modelo() {
    return this._modelo;
  }
  get municao() {
    return this._municao;
  }
  get trava() {
	return this._trava;
  }
  recarregar(balas) {
    this._municao + balas <= 7 ? this._municao+= balas : null;
  }
  engatilhar() {
    this._gatilho = true;
  }
  travar() {
    this._trava = true;
  }
  destravar() {
    this._trava = false;
  }
  atirar() {
    if ((!this._trava) && (this._gatilho)) {
      this._municao > 0 ? this._municao--: this._gatilho = false;
    }
  }
}