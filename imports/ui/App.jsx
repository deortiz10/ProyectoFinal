import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Log from './log.jsx';
import Clima from './Clima.jsx';
import Ciudad from './Ciudad.jsx';
//import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';
import {Busquedas} from '../api/search.js';
import AccountsUIWrapper from './accountsUIWrapper.jsx';
// App component - represents the whole app
 class App extends Component {

 constructor(props){
   super(props);
   this.state = {
     vacio:0,
     cercanas:[],
     partlySunny:[],
     partlyCloudy:[],
     moustlyCloudy:[],
     cloudy:[],
     aShower:[],
     sunny:[],
     rain:[],
     heavyThunderstorm:[],
     listActivities:[]
   }
 }

    warning(){
      if(this.state.vacio==1){
        console.log("si esta vacio");
        return(
          <div className="alert">
            <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
              El campo<strong> no </strong>puede estasr vacio
          </div>
        )
      }
    }

    showList(){
      if( this.state.partlySunny && this.state.rain && this.state.sunny && this.state.partlyCloudy && this.state.cloudy && this.state.aShower){
        return (
          <div>
          <div className="col-md-1"></div>
          <div className="col-md-10 container">
            <Clima lista={this.state.partlySunny} name={'Partly sunny'}/>
            <Clima lista={this.state.rain} name={'Rain'}/>
            <Clima lista={this.state.sunny} name={'Sunny'}/>
            <Clima lista={this.state.partlyCloudy} name={'Partly cloudy'}/>
            <Clima lista={this.state.cloudy} name={'Cloudy'}/>
            <Clima lista={this.state.aShower} name={'A shower'}/>
          </div>
          <div className="col-md-1"></div>
          </div>
        );
      }
    }


     render() {
         return (
            <div>
               <AccountsUIWrapper />
             <div className="container">
                 <form className="climate-form" onSubmit={this.Climate.bind(this)} >
                 <div className="form-group">
                <label for="city">City</label>
                  <input type="text" className="form-control" id="city" ref="city"/>
                  <br/>
                     <button type="submit" className="btn amarillo"> find chilax </button>
                  </div>
                 </form>
                 <br/>
                 {this.warning()}
                 {this.showList()}
                 <br/>
             </div>
            </div>
         );
     }

     Climate(event) {
         event.preventDefault();
         const text1 = ReactDOM.findDOMNode(this.refs.city).value.trim();
         query = text1;
         console.log("entro evento");
         console.log(query);
         if(query != ""){

          //  Meteor.call("accuweather.conditions", query, (err, res)=> {
          //      if (err)
          //      {
          //          console.log(err);
          //      }
          //          console.log(res);
          //  });

          console.log("Busca ciudades cercanas")
          Meteor.call("geo.search", query, (err, response)=> {
              if (err)
              {
                  console.log(err);
              }
                  for(var i=0; i<response.length; i++)
                  {
                    console.log(response[i].name);
                        var lat = response[i].lat;
                        var long = response[i].long;
                        Meteor.call("yelp.search",lat,long,(err,res)=> {
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

                    // Meteor.call("accuweather.conditions", response[i].name, (err, res)=> {
                    //     if (err)
                    //     {
                    //         console.log(err);
                    //     }
                    //         console.log(res);
                    //         if(res.Summary == 'Partly sunny'){
                    //           this.state.partlySunny.push(res);
                    //           console.log('Partly sunny'+this.state.partlySunny.length);
                    //
                    //         }else if(res.Summary == 'Rain'){
                    //           this.state.rain.push(res);
                    //           console.log('Rain'+this.state.rain.length);
                    //
                    //         }else if(res.Summary == 'Cloudy'){
                    //           this.state.cloudy.push(res);
                    //           console.log('Cloudy'+this.state.cloudy.length);
                    //
                    //         }else if(res.Summary == 'Sunny'){
                    //           this.state.sunny.push(res);
                    //           console.log('Sunny'+this.state.sunny.length);
                    //
                    //         }else if(res.Summary == 'A shower'){
                    //           this.state.aShower.push(res);
                    //           console.log('A shower'+this.state.aShower.length);
                    //
                    //         }else if(res.Summary == 'Partly cloudy'){
                    //           this.state.partlyCloudy.push(res);
                    //           console.log('Partly cloudy'+this.state.partlyCloudy.length);
                    //         }else{
                    //           console.log(res.Summary);
                    //         }
                    //
                    // });
                  }
          });

         }else{
           console.log("Esta vacio");
           this.state.vacio =1;
          }
         }

        lookPlaces(event)
         {
            console.log("entro evento lookPlaces");
            event.preventDefault();
            Meteor.call("yelp.search", (err,res)=> {
                if (err)
                {
                  console.log(err);
                }
                console.log(res);
            });
        }

        log(event)
        {
            event.preventDefault();
            return (
            <Log/>
            );
        }
 }
 export default createContainer(() => {
   return {
     searches: Busquedas.find({}).fetch(),
      currentUser: Meteor.user(),
   };
 }, App);
