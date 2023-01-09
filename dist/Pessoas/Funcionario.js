"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Endereco_1 = require("./Endereco");
class Funcionario extends Endereco_1.Endereco {
    constructor(nome, cpf, telefone, salario, vip, numeroConta, saldo, cep, logradouro, numero, complemento, cidade, uf) {
        super(nome, cpf, telefone, vip, numeroConta, saldo, cep, logradouro, numero, complemento, cidade, uf);
        this.salario = salario;
    }
    Funcionario(salario) {
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
}
exports.Funcionario = Funcionario;
