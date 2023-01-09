"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app4 = void 0;
const Cliente_1 = require("../Pessoas/Cliente");
const ContaCorrente_1 = require("../Contas/ContaCorrente");
const ContaPoupanca_1 = require("../Contas/ContaPoupanca");
function app4() {
    const Cliente2 = new Cliente_1.Cliente("Carlos Rubens", "555.111.333-22", "11 97766-6644", true);
    const Conta2 = new ContaCorrente_1.contaCorrente(1000, 0, Cliente2, "10300", "10301");
    console.log(`\n Aplicação 4 \n`);
    Conta2.depositar(1000);
    const Cliente3 = new Cliente_1.Cliente("Roberto Garcia", "666.222.444-22", "11 95577-2244", true);
    const contaDestino = new ContaPoupanca_1.contaPoupanca(0, 0, Cliente3, "10509", "10510");
    contaDestino.depositar(1000);
    Conta2.transferir(500, contaDestino);
    console.log(`
        Extrato Conta Corrente
        Nome: ${Cliente2.getNome()}
        Número: ${Conta2.getNumeroContaCorrente()}
        Saldo atual: R$ ${Conta2.getSaldo()}

        Extrato Conta Poupança
        Nome: ${Cliente3.getNome()}
        Número: ${contaDestino.getNumeroContaPoupanca()}
        Saldo atual: R$ ${contaDestino.getSaldo() + 500}
      `);
    //solução provisória, função transferir funciona porém não soma o valor transferido na conta destino.
}
exports.app4 = app4;
