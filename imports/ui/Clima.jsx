import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Ciudad from './Ciudad.jsx';

// App component - represents the whole app
 class Clima extends Component {

  constructor(props){
  super(props);
    this.state={
      cities:[],
      print:false
    }
  }

  showCities(){
    console.log("entra a showcities");
    if(this.state.print==true){
        this.setState({print:false});
    }else{
        this.setState({print:true});
    }
    console.log(this.state.print);
    return (
      <div>
        <h1>hola</h1>
      </div>
    );
  }

  printCities(){
    console.log(this.state.print);
    if(this.state.print==true){
      console.log("entra a printcities");
      console.log(this.props.lista.length);
      // return(
      return this.props.lista.map((c) => (
            <Ciudad name={c.name} lat={c.lat} long={c.long}/>
           ))
      //     <Ciudad name='karen' lat='{ciudad.lat}' long='{ciudad.long}'/>
      // );
    }
}




  render(){
    if(this.props.name && this.props.lista){
      return(
            <div>
              <button type="button" className="btn btn-info flotante" onClick={this.showCities.bind(this)}>{this.props.name} <span className="badge">{this.props.lista.length}</span></button>
              {this.printCities()}
            </div>
      );
    }else{
      return(
        <div>
          No hay lista
        </div>
      );
  }
  }

}
export default Clima;
