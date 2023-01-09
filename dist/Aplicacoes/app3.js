"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app3 = void 0;
const Cliente_1 = require("../Pessoas/Cliente");
const ContaCorrente_1 = require("../Contas/ContaCorrente");
function app3() {
    const Cliente2 = new Cliente_1.Cliente("Eduardo", "777.222.333-00", "11 98866-5544", true);
    const Conta2 = new ContaCorrente_1.contaCorrente(1000, 0, Cliente2, "10200", "10201");
    console.log(`\n Aplicação 3 \n`);
    Conta2.depositar(100);
    Conta2.depositar(100);
    Conta2.depositar(100);
    Conta2.sacar(50);
    console.log(`
    Nome: ${Cliente2.getNome()}
    Conta: ${Conta2.getNumeroContaCorrente()}
    Saldo atual: R$ ${Conta2.getSaldo()}
    `);
}
exports.app3 = app3;
