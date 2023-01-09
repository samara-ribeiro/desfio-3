import { Conta } from "./Conta";
import { Cliente } from "../Pessoas/Cliente";
import { RentabilidadeMensal } from "./RentabilidadeMensal";


export class contaPoupanca extends Conta implements RentabilidadeMensal {
    rentabilidadeMensal: number;
    saldo = 0;
    numeroContaPoupanca : string;
    jurosSimples = 0;
    taxaDeJuros = 0.01;
    cliente = Cliente;
    

constructor (saldo: number, rentabilidadeMensal: number, cliente: Cliente, numeroContaCorrente: string, numeroContaPoupanca: string){
    super(numeroContaCorrente, saldo, numeroContaPoupanca)
    this.rentabilidadeMensal = rentabilidadeMensal;
    this.saldo = saldo;
    this.numeroContaPoupanca = numeroContaPoupanca;
    this.cliente = Cliente;
}
    public getRentabilidadeMensal(): number {
        throw new Error("Method not implemented.");
    }
    public setRentabilidadeMensal(rentabilidadeMensal: number): void {
        throw new Error("Method not implemented.");
    }

//Calcular o rendimento
public calcularRendimento(saldo: number) : void {
    this.rentabilidadeMensal = this.rentabilidadeMensal + saldo;
}

//Calcular o saldo
public calcularSaldo(saldo: void, limite: number) {
    saldo = contaPoupanca.getSaldo();
    console.log("Seu saldo atual é de:" + saldo);
}

}