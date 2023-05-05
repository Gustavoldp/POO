import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Excluir from "./deletar";

let exe = true

export default class DeletarCliente extends Excluir {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public Deleta(): void {
        console.log(`\nExclusão de cliente`);
        exe = true
        while (exe){
            let busca = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `);
            let cont = 1
            this.clientes.forEach(cliente =>{
                if (cliente.getCpf.getValor == busca){
                    console.log(`Cliente encontrado, nome: ${cliente.nome}, deseja realmente excluir o cliente? `);
                    let confirma = this.entrada.receberNumero(`1 - excluir, 2 - cancelar: `)
                    switch(confirma){
                        case 1:
                            let indice = this.clientes.indexOf(cliente)
                            this.clientes.splice(indice, 1)
                            console.log(`Cliente excluido!`);
                            exe = false
                            break;
                        case 2:
                            exe = false
                            console.log(`Operação Cancelada!`);
                            break;
                            
                    }
                }
                else if(cont == this.clientes.length){
                    console.log(`\n Cliente não encontrado`); 
                    exe = false
                }
                else{
                    cont++
                }
            })
                
                        
        }
    }

}