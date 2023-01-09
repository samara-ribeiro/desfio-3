import { Cliente } from "../Pessoas/Cliente";
import { contaPoupanca } from "./ContaPoupanca";


export class RentabilidadeMensal extends contaPoupanca {
    rentabilidadeMensal = this.taxaDeJuros * this.saldo * 1;
    taxaDeJuros = 0.01;

constructor (saldo: number, rentabilidadeMensal: number, cliente: Cliente, numeroContaCorrente: string, numeroContaPoupanca: string){
    super(saldo, rentabilidadeMensal, cliente, numeroContaCorrente, numeroContaPoupanca)
    this.rentabilidadeMensal = this.taxaDeJuros * this.saldo * 1;
}

public getRentabilidadeMensal() : number {
    return this.rentabilidadeMensal;
}

public setRentabilidadeMensal(rentabilidadeMensal: number) {
    this.rentabilidadeMensal = 0.01 * this.saldo * 1;
}

}