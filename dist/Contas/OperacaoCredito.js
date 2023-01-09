"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operacaoCredito = void 0;
class operacaoCredito {
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
exports.operacaoCredito = operacaoCredito;
