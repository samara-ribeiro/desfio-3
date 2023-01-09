"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operacaoDebito = void 0;
class operacaoDebito {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
exports.operacaoDebito = operacaoDebito;
