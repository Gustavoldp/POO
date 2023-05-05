import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Excluir from "./deletar";

let executa = true

export default class DeletarProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public Deleta(): void {
        console.log(`\nExclusão de Produto`);
        executa = true
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o nome do Produto: `);
            let cont = 1
            this.produtos.forEach(produto =>{
                if (produto.nome == busca){
                    console.log(`Deseja realmente excluir o Produto?`);
                    let confirma = this.entrada.receberNumero(`1 - excluir, 2 - cancelar: `)
                    switch(confirma){
                        case 1:
                            let indice = this.produtos.indexOf(produto)
                            this.produtos.splice(indice, 1)
                            console.log(`Produto excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`Cancelado`);
                            break;
                            
                    }
                }
                else if(cont == this.produtos.length){
                    console.log(`\nProduto não encontrado`); 
                    executa = false
                }
                else{
                    cont++
                }
            })
                
                        
        }
    }

}