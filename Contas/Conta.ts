//import {OperacaoCredito} from "./OperacaoCredito"
//import {OperacaoDebito} from "./OperacaoDebito"
import { Cliente } from "../Pessoas/Cliente";
import {contaCorrente} from "./ContaCorrente";


export class Conta {
    static getSaldo() {}

    static contadorDeContas = 1;

    numeroContaCorrente: string;
    numeroContaPoupanca: string;
    saldo = 0;
    

    constructor (numeroContaCorrente: string, saldo: number, numeroContaPoupanca: string) {
        this.numeroContaCorrente = numeroContaCorrente;
        this.numeroContaPoupanca = numeroContaPoupanca;
        this.saldo = saldo;
        Conta.contadorDeContas += 1;
    }

    public getNumeroContaCorrente() : string {
        return this.numeroContaCorrente;
    }

    public setNumeroContaCorrente(numeroContaCorrente: string) {
        this.numeroContaCorrente = numeroContaCorrente;
        
    }

    
    public getNumeroContaPoupanca() : string {
        return this.numeroContaPoupanca;
    }

    public setNumeroContaPoupanca(numeroContaPoupanca: string) {
        this.numeroContaPoupanca = numeroContaPoupanca;
        
    }


    public getSaldo() : number {
        return this.saldo;
    }

    public setSaldo(saldo: number) {
        this.saldo = saldo;
        
    }

    public depositar(valor : number) : void {
        if (valor > 0) {
            this.setSaldo(this.getSaldo()+valor);
            console.log("Seu depósito de R$ " + valor + " foi realizado com sucesso!");
        } else {
            console.log("Não foi possível realizar o depósito.")
        }
    }

    public sacar(valor : number) : void {
        if (valor > 0 && this.getSaldo() >= valor) {
            this.setSaldo(this.getSaldo()-valor);
            console.log("Seu saque de R$ " + valor + " foi realizado com sucesso!");
        } else {
            console.log("Não foi possível realizar o saque.")
        }
    }

}