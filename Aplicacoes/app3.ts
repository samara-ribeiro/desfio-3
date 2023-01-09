import { Cliente } from "../Pessoas/Cliente";
import { contaCorrente } from "../Contas/ContaCorrente";
import { Conta } from "../Contas/Conta";

export function app3 () {

    const Cliente2 = new Cliente ("Eduardo", "777.222.333-00","11 98866-5544", true);
    const Conta2 = new contaCorrente (1000, 0, Cliente2, "10200", "10201");

    console.log(`\n Aplicação 3 \n`)

    Conta2.depositar(100);
    Conta2.depositar(100);
    Conta2.depositar(100);
    Conta2.sacar(50);

    console.log(`
    Nome: ${Cliente2.getNome()}
    Conta: ${Conta2.getNumeroContaCorrente()}
    Saldo atual: R$ ${Conta2.getSaldo()}
    `)
 
}