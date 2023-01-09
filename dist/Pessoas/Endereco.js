"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
const Cliente_1 = require("./Cliente");
class Endereco extends Cliente_1.Cliente {
    constructor(nome, cpf, telefone, vip, numeroConta, saldo, cep, logradouro, numero, complemento, cidade, uf) {
        super(nome, cpf, telefone, vip);
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getLogradouro() {
        return this.logradouro;
    }
    setLogradouro(logradouro) {
        this.logradouro = logradouro;
    }
    getNumero() {
        return this.numero;
    }
    setComplemento(complemento) {
        this.complemento = complemento;
    }
    getCidade() {
        return this.cidade;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    getUf() {
        return this.uf;
    }
    setUf(uf) {
        this.uf = uf;
    }
}
exports.Endereco = Endereco;
