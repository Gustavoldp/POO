import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro{

    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log('\nCadastro de serviços');
        let nome = this.entrada.receberTexto("Informe o serviço: ");
        let servico = new Servico(nome)
        this.servicos.push(servico)
        console.log(`\nCadastro concluído`);
    }
    
}