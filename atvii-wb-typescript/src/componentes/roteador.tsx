import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import CadastroProduto from "./formCadastroProduto";
import CadastroServico from "./formCadastroServico";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListarProdutos from "./listaProduto";
import ListarServicos from "./listaServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="blue-grey darken-4" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="blue-grey" />
                </>
            )
        } else if (this.state.tela === 'Cadastros'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="blue-grey" />
                    <CadastroProduto tema="blue-grey" />
                    <CadastroServico tema="blue-grey" />
                </>
            )
            
        } else if (this.state.tela === 'Produtos'){
            return(
                <>
                {barraNavegacao}
                <ListarProdutos tema="blue-grey"/>
            </>
            )

        } else{
            return(
                <>
                {barraNavegacao}
                <ListarServicos tema="blue-grey"/>
                </>
            )
        }

    }
}