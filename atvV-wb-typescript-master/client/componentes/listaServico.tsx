import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}

export default class ListarServicos extends Component<props>{
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection" >
                <a className="collection-item">Corte feminino</a>
                <a className="collection-item">Corte masculino</a>
            </div>
        )
    }
}