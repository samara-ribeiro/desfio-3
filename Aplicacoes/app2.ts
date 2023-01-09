import { Endereco } from "../Pessoas/Endereco";
import { Cliente } from "../Pessoas/Cliente";

export function app2() {
    const Cliente1 = new Cliente ("João Gomes", "111.222.333-44", "11 99988-7777", true);
    const endereco1 = new Endereco ("João Gomes", "111.222.333-44", "11 99988-7777", true,"33100", 0, "12111-200", "Av. Mario Justus", "300", "Casa", "São Paulo", "SP")
    const endereco2 = new Endereco ("João Gomes", "111.222.333-44", "11 99988-7777", true,"44500", 0, "12133-320", "Rua Roberto Luís", "1000", "Casa", "São Paulo", "SP")
    const endereco3 = new Endereco ("João Gomes", "111.222.333-44", "11 99988-7777", true,"21100", 0,"12222-500", "Av. Josefa Maria", "150", "Casa", "São Paulo", "SP")

//Falta vincular os endereços ao Cliente 1

    console.log(`\n Aplicação 2
    
        Cliente: ${Cliente1.getNome()}

        Endereço 1: 
        Cep = ${endereco1.getCep()} 
        Logradouro = ${endereco1.getLogradouro()}
        Número: ${endereco1.getNumero()}
        Cidade: ${endereco1.getCidade()}
        UF: ${endereco1.getUf()}

        Endereço 2: 
        Cep = ${endereco2.getCep()} 
        Logradouro = ${endereco2.getLogradouro()}
        Número: ${endereco2.getNumero()}
        Cidade: ${endereco2.getCidade()}
        UF: ${endereco2.getUf()}

        Endereço 3: 
        Cep = ${endereco3.getCep()} 
        Logradouro = ${endereco3.getLogradouro()}
        Número: ${endereco3.getNumero()}
        Cidade: ${endereco3.getCidade()}
        UF: ${endereco3.getUf()}
        `)

}