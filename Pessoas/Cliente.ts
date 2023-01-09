
import { Pessoa } from "../Pessoas/Pessoa";
import { Conta } from "../Contas/Conta";

export class Cliente extends Pessoa {
    
    vip : boolean;
    
    constructor (
        nome : string, 
        cpf : string, 
        telefone : string,
        vip: boolean,
    ) {
        super(nome, cpf, telefone);
        this.vip = vip;
    }
}