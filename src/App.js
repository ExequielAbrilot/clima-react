import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';


class App extends Component {

  state = {
    error: {},
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState){
    if( prevState.consulta !== this.state.consulta ){
      this.consultarApi();
    }
    
  }

  componentDidMount(){
    this.setState({
      error:{error:false, message:''}
    })
  }

  consultarApi = () =>{
    let { ciudad, pais } = this.state.consulta;
    if(!ciudad || !pais) return null;

    let idToken = '4865a182d68ebd64453a0ab82e2219d0';
    let urlBase = 'https://api.openweathermap.org/data/2.5/weather?';
    let query = `q=${ciudad},${pais}&lon=139&appid=${idToken}`;
    let urlTotal = urlBase+query;

    fetch(urlTotal)
      .then(res=>{
        if(res.ok){
          return res.json();
        }else{
          console.log(res);
          this.setState({
            error:{error:true, message:res.statusText}
          })
        }
      }).then(res =>{
        this.setState({
          resultado: res
        })
      }).catch(error=>{
        this.setState({
          error:{error:true, message:error.message}
        })
      })
    
  }

  datosconsulta = (resp) =>{
    if(resp.pais ==='' || resp.ciudad===''){
      this.setState({
        error:{error:true, message:'Los Campos Son obligatorios'}
      })
    }else{
      this.setState({
        consulta: resp,
        error: {error:false, message:''}
      })
    }
  }

  render() {

    let hay = this.state.error;
    if(hay.error){
      var msjDiv = <Error mensaje={this.state.error.message}/>
    }else{
      msjDiv = <Clima resultado = {this.state.resultado}/>
    }
    
    return (
      <div className="app">
        <Header titulo="Clima React" />
        <Formulario datosconsulta={this.datosconsulta}/>
        {msjDiv}
      </div>
    );
  }
}

export default App;
