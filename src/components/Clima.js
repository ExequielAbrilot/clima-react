import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Clima extends Component {

    mostrarResultado = () =>{
        let {name, weather, main} = this.props.resultado
        const kelvin = 273.15;
        
        if(!name || !weather || !main){
            return null;
        }else{
            const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`
            const alt = `clima de ${name}`;
            return(
                <div className="row">
                    <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                        <div className="card-panel light-blue align-center">
                            <span className="white-text">
                                <h2>Resultado de: {name}</h2>
                                <p className="temperatura">
                                    Actual: {(main.temp-kelvin).toFixed(2)} &deg;C
                                    <img src={urlIcon} alt={alt} ></img>
                                </p>
                                <p>Max. {(main.temp_max-kelvin).toFixed(2)} &deg;C</p>
                                <p>Min. {(main.temp_min-kelvin).toFixed(2)} &deg;C</p>

                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}

Clima.propType ={
    resultado: PropTypes.object.isRequired
}