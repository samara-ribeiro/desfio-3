import { Cliente } from "./Cliente";

export class Endereco extends Cliente {

    cep : string;
    logradouro : string;
    numero : string;
    complemento : string;
    cidade : string;
    uf : string;

constructor (
    nome : string, 
    cpf : string, 
    telefone : string,
    vip : boolean,
    numeroConta : string,
    saldo : number,
    cep : string, 
    logradouro : string, 
    numero : string, 
    complemento : string, 
    cidade : string, 
    uf : string,
    
    ){
    super(nome, cpf, telefone, vip);
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.cidade = cidade;
    this.uf = uf;
    }

    public getCep() : string {
        return this.cep;
    }

    public setCep(cep: string) {
        this.cep = cep;
        
    }

    public getLogradouro() : string{
        return this.logradouro;
    }

    public setLogradouro(logradouro: string) : void {
        this.logradouro = logradouro;
        
    }

    public getNumero() : string {
        return this.numero;
    }

    public setComplemento(complemento: string) : void {
        this.complemento = complemento;
        
    }

    public getCidade() : string {
        return this.cidade;
    }

    public setCidade(cidade: string) : void {
        this.cidade = cidade;
        
    }

    public getUf() : string {
        return this.uf;
    }

    public setUf(uf: string) : void {
        this.uf = uf;
        
    }

}