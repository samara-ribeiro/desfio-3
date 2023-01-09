import { Funcionario } from "../Pessoas/Funcionario";
import { Cargo } from "../Pessoas/Cargo";
import { Endereco } from "../Pessoas/Endereco";

export function app1 () {
    const Atendente = new Cargo("Atendente");
    const Funcionario1 = new Funcionario("João", "111.222.333-44", "11 99988-7777", 2500, true, "11222", 0, "12111-200", "Av. Mario Justus", "300", "Casa", "São Paulo", "SP")

    const Gerente = new Cargo("Gerente");
    const Funcionario2 = new Funcionario("Maria", "555.666.777-88", "11 95566-8888", 6000, true, "22300", 0, "12222-300", "Av. Pedro Roberto", "200", "Casa", "São Paulo", "SP")


    console.log(`\n Aplicação 1

        Funcionário: ${Funcionario1.getNome()}
        Cargo: ${Atendente.cargo}
        Salário: R$ ${Funcionario1.getSalario()}`)

    console.log(`
        Funcionário: ${Funcionario2.getNome()}
        Cargo: ${Gerente.cargo}
        Salário: R$ ${Funcionario2.getSalario()}`)
}