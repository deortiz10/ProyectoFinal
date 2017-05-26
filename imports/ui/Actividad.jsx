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
      phone:'',
      pressed:false
    }
  }

  pressed(){
    if(this.state.pressed==true){
      this.setState({pressed:false});
    }else{
      this.setState({pressed:true});
    }
  }


  render(){
    if(this.props.name){
      return(
            <div className="row">
              <button type="button" className="btn naranja" onClick={this.pressed()}>{this.props.name}<span className="badge">{this.props.rating}</span></button>
              {}
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
