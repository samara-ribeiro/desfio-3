import { Cliente } from "../Pessoas/Cliente";
import { contaCorrente } from "../Contas/ContaCorrente";
import { Conta } from "../Contas/Conta";
import { contaPoupanca } from "../Contas/ContaPoupanca";
import { RentabilidadeMensal } from "../Contas/RentabilidadeMensal";

export function app4 (this: any) {

    const Cliente2 = new Cliente ("Carlos Rubens", "555.111.333-22","11 97766-6644", true);
    const Conta2 = new contaCorrente (1000, 0, Cliente2, "10300", "10301");
    
    console.log(`\n Aplicação 4 \n`)

    Conta2.depositar(1000);

    const Cliente3 = new Cliente ("Roberto Garcia", "666.222.444-22","11 95577-2244", true);
    const contaDestino = new contaPoupanca (0, 0, Cliente3,"10509","10510");

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
        Saldo atual: R$ ${contaDestino.getSaldo()+500}
      `)

      //solução provisória, função transferir funciona porém não soma o valor transferido na conta destino.
}