import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}

export default class ListarProdutos extends Component<props>{
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection" >
                <a className="collection-item">Shampoo belezura/R$70</a>
                <a className="collection-item">Apara jardim 4000/R$18,55</a>
            </div>
        )
    }
}