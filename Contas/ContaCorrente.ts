import { Conta } from "./Conta";
import { Cliente } from "../Pessoas/Cliente";
import { contaPoupanca } from "./ContaPoupanca";


export class contaCorrente extends Conta {
    limite: any;
    cliente = Cliente;
    saldo = 0;

constructor (limite: number, saldo: number, cliente: Cliente, numeroContaCorrente: string, numeroContaPoupanca: string){
    super(numeroContaCorrente, saldo, numeroContaPoupanca)
    this.limite = limite;
    this.cliente = Cliente;
    this.numeroContaCorrente = numeroContaCorrente;
    this.numeroContaPoupanca = numeroContaPoupanca;
}

public getLimite() : number {
    return this.limite;
}

public setLimite(limite: number) {
    this.limite = limite;
}

//Transferir
public transferir(valor: number, contaDestino: any) : void {
    if (valor > 0 && this.getSaldo() >= valor) {
        this.setSaldo(this.getSaldo()-valor);
        contaDestino.setSaldo(this.getSaldo()+valor);
        console.log("Sua transferência de R$ " + valor + " foi realizada com sucesso!");
    } else {
        console.log("Não foi possível realizar a transferência.")
    }
}

//Calcular o saldo
public calcularSaldo(saldo: void, limite: number) {
    saldo = contaCorrente.getSaldo();
    console.log("Seu saldo atual é de:" + saldo);
}

}