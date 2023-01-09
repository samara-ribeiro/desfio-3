"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaPoupanca = void 0;
const Conta_1 = require("./Conta");
const Cliente_1 = require("../Pessoas/Cliente");
class contaPoupanca extends Conta_1.Conta {
    constructor(saldo, rentabilidadeMensal, cliente, numeroContaCorrente, numeroContaPoupanca) {
        super(numeroContaCorrente, saldo, numeroContaPoupanca);
        this.saldo = 0;
        this.jurosSimples = 0;
        this.taxaDeJuros = 0.01;
        this.cliente = Cliente_1.Cliente;
        this.rentabilidadeMensal = rentabilidadeMensal;
        this.saldo = saldo;
        this.numeroContaPoupanca = numeroContaPoupanca;
        this.cliente = Cliente_1.Cliente;
    }
    getRentabilidadeMensal() {
        throw new Error("Method not implemented.");
    }
    setRentabilidadeMensal(rentabilidadeMensal) {
        throw new Error("Method not implemented.");
    }
    //Calcular o rendimento
    calcularRendimento(saldo) {
        saldo = this.rentabilidadeMensal + saldo;
    }
    //Calcular o saldo
    calcularSaldo(saldo, limite) {
        saldo = contaPoupanca.getSaldo();
        console.log("Seu saldo atual é de:" + saldo);
    }
}
exports.contaPoupanca = contaPoupanca;
