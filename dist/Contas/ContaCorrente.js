"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaCorrente = void 0;
const Conta_1 = require("./Conta");
const Cliente_1 = require("../Pessoas/Cliente");
class contaCorrente extends Conta_1.Conta {
    constructor(limite, saldo, cliente, numeroContaCorrente, numeroContaPoupanca) {
        super(numeroContaCorrente, saldo, numeroContaPoupanca);
        this.cliente = Cliente_1.Cliente;
        this.saldo = 0;
        this.limite = limite;
        this.cliente = Cliente_1.Cliente;
        this.numeroContaCorrente = numeroContaCorrente;
        this.numeroContaPoupanca = numeroContaPoupanca;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(limite) {
        this.limite = limite;
    }
    //Transferir
    transferir(valor, contaDestino) {
        if (valor > 0 && this.getSaldo() >= valor) {
            this.setSaldo(this.getSaldo() - valor);
            contaDestino.setSaldo(this.getSaldo() + valor);
            console.log("Sua transferência de R$ " + valor + " foi realizada com sucesso!");
        }
        else {
            console.log("Não foi possível realizar a transferência.");
        }
    }
    //Calcular o saldo
    calcularSaldo(saldo, limite) {
        saldo = contaCorrente.getSaldo();
        console.log("Seu saldo atual é de:" + saldo);
    }
}
exports.contaCorrente = contaCorrente;
