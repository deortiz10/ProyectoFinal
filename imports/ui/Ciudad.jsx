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
      long:'',
      listActivities:[]
    }
  }

  callActivities(){
    Meteor.call("yelp.search",this.props.lat,this.props.long,(err,res)=> {
        if (err)
        {
          console.log(err);
        }
          console.log(res);
        if(res){
          this.state.listActivities.push(res);
          console.log(this.state.listActivities);
        }
    });
  }

  render(){
    if(this.props.name){
      return(
            <div className="row">
            <button type="button" className="btn flotante amarillo" onClick={this.callActivities.bind(this)}>{this.props.name}</button>
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
