import {Pistola} from './pistola.class.js';

console.log('main!!');

// Cases -> programei usando o celular 

const arma = new Pistola(333666, pt40);
console.log(arma.numeroSerie === 333666);
console.log(arma.modelo === 'pt40');
arma.recarregar(4);
console.log(arma.municao === 4);
console.log(arma.trava === true);
arma.atirar();
console.log(arma.municao === 4);
arma.destravar();
arma.engatilhar();
arma.atirar();
console.log(arma.municao === 3);
arma.travar();
arma.atirar();
console.log(arma.municao === 3);
console.log(arma.trava === true);
arma.destravar();
console.log(arma.trava === false);
arma.atirar();
arma.atirar();
arma.atirar();
arma.atirar();
console.log(arma.trava === true);