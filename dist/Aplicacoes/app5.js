"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app5 = void 0;
const ContaPoupanca_1 = require("../Contas/ContaPoupanca");
const Cliente_1 = require("../Pessoas/Cliente");
function app5() {
    const Cliente3 = new Cliente_1.Cliente("Eduardo", "777.222.333-00", "11 98866-5544", true);
    const Conta3 = new ContaPoupanca_1.contaPoupanca(0, 0, Cliente3, "10500", "10501");
    console.log(`\nAplicação 5\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 0, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 1, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 2, 1).toLocaleDateString()}\n`);
    Conta3.sacar(100);
    console.log(`Data do Saque: ${new Date(2022, 2, 5).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 3, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 4, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 5, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 6, 1).toLocaleDateString()}\n`);
    Conta3.sacar(200);
    console.log(`Data do Saque: ${new Date(2022, 6, 8).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 7, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 8, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 9, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 10, 1).toLocaleDateString()}\n`);
    Conta3.depositar(200);
    console.log(`Data do Depósito: ${new Date(2022, 11, 1).toLocaleDateString()}\n`);
    Conta3.calcularRendimento(Conta3.saldo);
    console.log(`
    Nome: ${Cliente3.getNome()}
    Conta: ${Conta3.getNumeroContaPoupanca()}
    Saldo atual: R$ ${Conta3.getSaldo() + Conta3.getSaldo() * 0.01}
    `);
}
exports.app5 = app5;
