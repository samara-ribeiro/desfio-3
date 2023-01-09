"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentabilidadeMensal = void 0;
const ContaPoupanca_1 = require("./ContaPoupanca");
class RentabilidadeMensal extends ContaPoupanca_1.contaPoupanca {
    constructor(saldo, rentabilidadeMensal, cliente, numeroContaCorrente, numeroContaPoupanca) {
        super(saldo, rentabilidadeMensal, cliente, numeroContaCorrente, numeroContaPoupanca);
        this.rentabilidadeMensal = this.taxaDeJuros * this.saldo * 1;
        this.taxaDeJuros = 0.01;
        this.rentabilidadeMensal = this.taxaDeJuros * this.saldo * 1;
    }
    getRentabilidadeMensal() {
        return this.rentabilidadeMensal;
    }
    setRentabilidadeMensal(rentabilidadeMensal) {
        this.rentabilidadeMensal = this.taxaDeJuros * this.saldo * 1;
    }
}
exports.RentabilidadeMensal = RentabilidadeMensal;
