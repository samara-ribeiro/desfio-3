"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("../Pessoas/Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(nome, cpf, telefone, vip) {
        super(nome, cpf, telefone);
        this.vip = vip;
    }
}
exports.Cliente = Cliente;
