import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

 class Ciudad extends Component {

  constructor(props){
  super(props);
    this.state = {
      name:'',
      lat:'',
      long:''
    }
  }

  render(){
    if(this.props.name){
      return(
            <div>
            <h1>Ciudad</h1>
            <h2>{this.props.name}</h2>
            </div>
      );
    }else{
      return(
          <div>
            <p>No hay ciudades</p>
          </div>
      );
    }
  }

}
export default Ciudad;
