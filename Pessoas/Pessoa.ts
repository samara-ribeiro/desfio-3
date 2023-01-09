
export class Pessoa{

    counter = 1;
    nome : string; 
    cpf : string; 
    telefone : string;

    constructor (
        nome : string, 
        cpf : string, 
        telefone : string,
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.counter += 1;  
    }

    public getNome() : string {
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
        
    }

    public getCpf() : string{
        return this.cpf;
    }

    public setCpf(cpf: string) {
        this.cpf = cpf;
        
    }

    public getTelefone() : string {
        return this.telefone;
    }

    public setTelefone(telefone: string) {
        this.telefone = telefone;
        
    }
   
}

