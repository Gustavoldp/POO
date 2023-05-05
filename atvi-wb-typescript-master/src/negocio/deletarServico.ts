import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Excluir from "./deletar";

let executa = true

export default class DeletarServico extends Excluir {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public Deleta(): void {
        console.log(`\nExclusão de Serviço`);
        executa = true
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o Serviço: `);
            let cont = 1
            this.servicos.forEach(servico =>{
                if (servico.nome == busca){
                    console.log(`Deseja realmente excluir o Serviço?`);
                    let confirma = this.entrada.receberNumero(`1 - excluir, 2 - cancelar: `)
                    switch(confirma){
                        case 1:
                            let indice = this.servicos.indexOf(servico)
                            this.servicos.splice(indice, 1)
                            console.log(`Serviço excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`Cancelado`);
                            break;
                            
                    }
                }
                else if(cont == this.servicos.length){
                    console.log(`\nServiço não encontrado\n`); 
                    executa = false
                }
                else{
                    cont++
                }
            })      
        }
    }

}