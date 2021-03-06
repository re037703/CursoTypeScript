"use strict";
exports.__esModule = true;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'De segunda à sexta das 08:00 ';
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
exports["default"] = Concessionaria;
