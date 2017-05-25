import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Log from './log.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';
// App component - represents the whole app
 class App extends Component {

 constructor(props){
   super(props);
   this.state = {
     vacio:0
   }
 }


     render() {
         return (
             <div className="container">
                 <header>
                     <h1>Todo List</h1>
                 </header>
                 <div>
                    <form className="yelp-form" onSubmit={this.lookPlaces.bind(this)}>
                      <button type="submit" className="btn info">Get yelp </button>
                    </form>
                    <form className="near-form" onSubmit={this.places.bind(this)}>
                      <button type="submit" className="btn info">Get places </button>
                    </form>
                    <form className="log-form" onSubmit={this.log.bind(this)}>
                      <button type="submit" className="btn info">log page </button>
                    </form>
                 </div>
                 <form className="climate-form" onSubmit={this.Climate.bind(this)} >
                 <div className="form-group">
                  <label for="city">Ciudad:</label>
                  <input type="text" className="form-control" id="city" ref="city"/>
                     <button type="submit" className="btn info">Get conditions </button>
                  </div>

                 </form>
                 <br/>
                 {this.warning()}
                 <div className="alert">
                   <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                     El campo<strong> no </strong>puede estasr vacio
                 </div>
                 <br/>

             </div>
         );
     }

     warning()
     {
      if(this.state.vacio===1){

      }
     }

     Climate(event) {
         event.preventDefault();
         const text1 = ReactDOM.findDOMNode(this.refs.city).value.trim();
         query = text1;
         console.log("entro evento");
         console.log(query);
         if(query != ""){
          Meteor.call("accuweather.conditions", query, (err, res)=> {
              if (err)
              {
                  console.log(err);
              }
                  console.log(res.results);
          });
          console.log("BUSCA CIUDADES CERCANAS")
          Meteor.call("geo.search", query, (err, res)=> {
              if (err)
              {
                  console.log(err);
              }
                  console.log(res);
          });

         }else{
         this.setState({vacio:1});
         }


     }
     lookPlaces(event)
     {
        console.log("entro evento");
       event.preventDefault();
         Meteor.call("yelp.search", (err,resp)=> {
           if (err)
           {
             console.log(err);
           }
         });
     }

     places(event)
     {
       var city="dummy";
       Meteor.call("geo.search", city, (err, res)=> {
           if (err)
           {
               console.log(err);
           }
           else {
              console.log(res);
           }

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
export default App;
