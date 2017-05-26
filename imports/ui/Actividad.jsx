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
      pressed:false,
      city: ''
    }
  }

  pressed(){
    if(this.state.pressed==true){
      this.setState({pressed:false});
    }else{
      this.setState({pressed:true});
    }
  }

  showDetails(){
    if(this.state.pressed==true){
    return(
      <div className="row">
        <label type="text" className="btn azulOscuro">{this.props.name}</label>
        <img src={this.props.imageUrl} alt="imgURL"/>
      </div>
      );
    }
  }


  render(){
    if(this.props.name){
      return(
            <div className="row">
             <form className="climate-form" onSubmit={this.registerSelected.bind(this)} >
              <button type="submit" className="btn naranja" onClick={this.pressed()}>{this.props.name}<span className="badge">{this.props.rating}</span></button>
              {this.showDetails()}
              </form>
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

  registerSelected(event)
  {
    event.preventDefault() ;
    Meteor.call("Busquedas.insert",this.state.ciudad,this.state.categories[0], this.state.name);
  }

}
export default Actividad;
