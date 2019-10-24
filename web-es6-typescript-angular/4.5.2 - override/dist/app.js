"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var concessionaria_1 = require("./concessionaria");
var moto_1 = require("./moto");
var carro = new carro_1["default"]('Veloster', 3);
carro.acelerar();
carro.acelerar();
var moto = new moto_1["default"]();
moto.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
var concessionaria = new concessionaria_1["default"]('Avenida Paulista', []);
console.log(concessionaria.fornecerHorarioDeFuncionamento());
