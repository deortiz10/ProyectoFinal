import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

 class Actividad extends Component {

  constructor(props){
  super(props);
    this.state = {
      name:'',
      url:'',
      image_url:'',
      categories:[],
      rating:0,
      phone:''
    }
  }


  render(){
    if(this.props.name){
      return(
            <div className="row">
              <button type="button" className="btn flotante amarillo">{this.props.name}<span className="badge">{this.props.rating}</span></button>
            </div>
      );
    }else{
      return(
          <div>
            <p>None</p>
          </div>
      );
    }
  }

}
export default Actividad;
