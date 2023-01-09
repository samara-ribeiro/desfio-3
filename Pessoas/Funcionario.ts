import {Pessoa} from "../Pessoas/Pessoa"
import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";

export class Funcionario extends Endereco {
    salario : number;

constructor (
    nome: string, 
    cpf: string, 
    telefone: string, 
    salario : number,
    vip : boolean,
    numeroConta : string,
    saldo : number,
    cep : string, 
    logradouro : string, 
    numero : string, 
    complemento : string, 
    cidade : string, 
    uf : string,
    ) {
    super (nome, cpf, telefone, vip, numeroConta, saldo, cep, logradouro, numero, complemento, cidade, uf);
    this.salario = salario;
}

public Funcionario(salario : number){
    this.salario = salario;
}

public getSalario() : number {
    return this.salario;
}

public setSalario(salario: number) {
    this.salario = salario;
    
}

}