import Carro from './carro';
import Concessionaria from './concessionaria';
import Moto from './moto';

let carro = new Carro('Veloster', 3);
carro.acelerar();
carro.acelerar();


let moto = new Moto();
moto.acelerar();
moto.acelerar();

console.log(carro);
console.log(moto);


let concessionaria = new Concessionaria('Avenida Paulista', []);
console.log(concessionaria.fornecerHorarioDeFuncionamento());
