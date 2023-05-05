import { Component} from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}

export default class CadastroServico extends Component<props>{
    render(){
        let estiloBotao = `btn waves-effect blue-grey lighten-3 ${this.props.tema}`
        return(
            <div className="row">
                <blockquote>Cadastro de Serviços</blockquote>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Servico" type="text" className="validate"></input>
                            <label htmlFor="Servico">Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="DescServico" type="text" className="validate"></input>
                            <label htmlFor="DescServico">Descrição do serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Preco" type="text" className="validate"></input>
                            <label htmlFor="PrecoServico">Valor do serviço</label>
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