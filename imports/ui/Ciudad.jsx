import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Actividad from './Actividad.jsx';

 class Ciudad extends Component {

  constructor(props){
  super(props);
    this.state = {
      name:'',
      lat:'',
      long:'',
      listActivities:[],
      selected:false
    }
  }

  callActivities(){
    Meteor.call("yelp.search",this.props.lat,this.props.long,(err,res)=> {
        if (err)
        {
          console.log(err);
        }
        if(res.businesses){
          this.setState({listActivities:res.businesses});
        }
    });
    if(this.state.selected==true){
      this.setState({selected:false});
    }else{
    this.setState({selected:true});
    }

  }

  showActivities(){
    if(this.state.selected==true){
       console.log(this.state.listActivities.length);
      // console.log(this.state.listActivities);
      if(this.state.listActivities.length>0){
        return this.state.listActivities.map((a) => (
              <Actividad name={a.name} url={a.url} imageUrl={a.image_url} categories={a.categories} rating={a.rating} phone={a.phone} city={this.state.name}/>
             ))
        }
      // return (<Actividad name={'a.name'} url={'a.url'} imageUrl={'a.image_url'} categories={'a.categories'} rating={3.5} phone={'a.phone'}/>);
    }
  }

  render(){
    if(this.props.name){
      return(
            <div className="row">
            <button type="button" className="btn flotante amarillo" onClick={this.callActivities.bind(this)}>{this.props.name}</button>
              <div className="row">
                <div className="col-md-6"></div>
                    <div className="col-md-6">
                    {this.showActivities()}
                </div>
              </div>
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
