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
      print:0
    }
  }

  showCities(){
    console.log("entra a showcities");
    this.state.print = 1;
    return (
      //   this.props.lista.map((ciudad) => {
      //   <Ciudad key= {ciudad.itemId} name={ciudad.name} lat={ciudad.lat} long={ciudad.long}/>
      // })
      <div>
        <h1>hola</h1>
      </div>
    );
  }

  printCities(){
    console.log("entra a printcities");
    console.log(this.props.lista.length);
    return(
          this.props.lista.map((ciudad) => {
          <Ciudad key= {ciudad.itemId} name={ciudad.name} lat={ciudad.lat} long={ciudad.long}/>
         })
    )

}

  renderIcon(){
   console.log("came here")
   return(
     <div>Function called</div>
   )
 }



  render(){
    if(this.props.name && this.state.cities){
      return(
            <div>
              <button type="button" className="btn btn-info flotante" onClick={this.showCities.bind(this)}>{this.props.name} <span className="badge">{this.state.cities.length}</span></button>
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
