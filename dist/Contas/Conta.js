"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    static getSaldo() { }
    constructor(numeroContaCorrente, saldo, numeroContaPoupanca) {
        this.saldo = 0;
        this.numeroContaCorrente = numeroContaCorrente;
        this.numeroContaPoupanca = numeroContaPoupanca;
        this.saldo = saldo;
        Conta.contadorDeContas += 1;
    }
    getNumeroContaCorrente() {
        return this.numeroContaCorrente;
    }
    setNumeroContaCorrente(numeroContaCorrente) {
        this.numeroContaCorrente = numeroContaCorrente;
    }
    getNumeroContaPoupanca() {
        return this.numeroContaPoupanca;
    }
    setNumeroContaPoupanca(numeroContaPoupanca) {
        this.numeroContaPoupanca = numeroContaPoupanca;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.setSaldo(this.getSaldo() + valor);
            console.log("Seu depósito de R$ " + valor + " foi realizado com sucesso!");
        }
        else {
            console.log("Não foi possível realizar o depósito.");
        }
    }
    sacar(valor) {
        if (valor > 0 && this.getSaldo() >= valor) {
            this.setSaldo(this.getSaldo() - valor);
            console.log("Seu saque de R$ " + valor + " foi realizado com sucesso!");
        }
        else {
            console.log("Não foi possível realizar o saque.");
        }
    }
}
exports.Conta = Conta;
Conta.contadorDeContas = 1;
