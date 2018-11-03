import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Formulario extends Component{

    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima= (e)=>{
        console.log('Clic');
        e.preventDefault();

        let consulta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }

        this.props.datosconsulta(consulta);


    }

    render(){
        return(
            <div className="contenedor-form">
                <div className="container">
                    <div className="row" >
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadRef} id="ciudad" type="text"/>
                                <label htmlFor="ciudad" >Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef} >
                                    <option value="" defaultValue>Elige una opción</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">EEUU</option>
                                    <option value="MX">Mexico</option>
                                    <option value="CL">Chile</option>
                                </select>
                                <label htmlFor="pais" >Pais: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offser-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="buscar..."/>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Formulario.propTypes = {
    datosconsulta: PropTypes.func.isRequired
}