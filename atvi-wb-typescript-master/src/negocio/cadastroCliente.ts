import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        let valor = this.entrada.receberCpf(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        
        let genero = this.entrada.receberTexto('Informe seu gênero (M)/(F): ')

        let ddd = this.entrada.receberTexto('Informe o DDD: ')
        let num = this.entrada.receberTexto('Informe o número do telefone: ')
        let telefone = new Telefone(ddd, num)

        let numrg = this.entrada.receberTexto('Informe o número do rg: ')
        let datarg = this.entrada.receberTexto('Por favor informe a data de emissão do RG no formato dd/mm/yyyy: ')
        let partesDatarg = datarg.split('/')
        let anorg = new Number(partesDatarg[2].valueOf()).valueOf()
        let mesrg = new Number(partesDatarg[1].valueOf()).valueOf()
        let diarg = new Number(partesDatarg[0].valueOf()).valueOf()
        let dataEmissaorg = new Date(anorg, mesrg, diarg)

        let rg = new RG(numrg, dataEmissaorg)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        cliente.addRg(rg)
        cliente.addTelefones(telefone)
        this.clientes.push(cliente)

        console.log(`\nCadastro concluído :)\n`);
    }
}