export class ATM {
  constructor(numeroSerie) {
    this._numeroSerie = numeroSerie;
    this._box = [[5,0],[10,0],[20,0],[50,0],[100,0]];
  }
  get numeroSerie() {
    return this._numeroSerie;
  }
  get valor() {
    let cont = 0;
    for (const value of this._box) {
      cont += value[0] * value[1];
    }
    return cont;
  }
  abastecer(n, cedule) {
    for (let i = 0; i<5; i++) {
      if (this._box[i][0] === cedule) {
        (this._box[i][1] + n  <= 100) ? this._box[i][1] += n : null;
        break;
      }
    }
  }
  cedulas(cedule) {
    for (let i = 0; i<5; i++) {
      if (this._box[i][0] === cedule) {
        return this._box[i][1];
      }
    }
    return 0;
  }
  retirar(value) {
    let backup = [];
    if (value > this.valor) {
      return null;
    } else {
      for (let i=4; i>=0; i--) {
        for (let j=0; j<100; j++) {
          if (this._box[i][0] <= value && this._box[i][1]) {
            this._box[i][1]--;
            value -= this._box[i][0];
            backup.push(this._box[i]);
          }
          if (value === 0 || value < this._box[1][0]) break;
        }
      }
      if (value > 0) {
        for (const x of backup) {
          for (let y=0; y<=4; y++) {
            if (this._box[y][0] === x[0]) {
              this._box[y][1]++;
            }
          }
        }
      }
    }
  }
}
