import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}

export default class CadastroProduto extends Component<props> {
    render(){
        let estiloBotao = `btn waves-effect blue-grey lighten-3 ${this.props.tema}`
        return (
            <div className="row">
                <blockquote>Cadastro de produtos</blockquote>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Produto" type="text" className="validate" />
                            <label htmlFor="Produto">Produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="DescProduto" type="text" className="validate" />
                            <label htmlFor="DescProduto">Descrição do produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Preco" type="text" className="validate" />
                            <label htmlFor="Preco">Preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">
                                Submit <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}