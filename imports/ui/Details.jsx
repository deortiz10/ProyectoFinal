import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

 class Details extends Component {

  constructor(props){
  super(props);
    this.state = {

    }
  }


  render(){
    if(this.props.name){
      return(
            <div className="row">
              <label type="text" className="btn azulOscuro">{this.props.name}</label>
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
export default Details;
