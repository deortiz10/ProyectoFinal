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
     vacio:0,
     cercanas:[],
     partySunny:[],
     partyCloudy:[],
     moustlyCloudy:[],
     cloudy:[],
     shower:[],
     heavyThunderstorm:[]
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
        );
      }
    }


     render() {
         return (
             <div className="container">
                 <form className="climate-form" onSubmit={this.Climate.bind(this)} >
                 <div className="form-group">
                <label for="city">Ciudad:</label>
                  <input type="text" className="form-control" id="city" ref="city"/>
                     <button type="submit" className="btn info"> find chilax </button>
                  </div>
                 </form>
                 <br/>
                 {this.warning()}
                 <br/>
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

           Meteor.call("accuweather.conditions", query, (err, res)=> {
               if (err)
               {
                   console.log(err);
               }
                  //  console.log(res.results);
           });

          console.log("Busca ciudades cercanas")
          Meteor.call("geo.search", query, (err, response)=> {
              if (err)
              {
                  console.log(err);
              }
                  var respuesta = response;
                  this.setState({cercanas:respuesta});
                  console.log(this.state.cercanas);
                  for(var i=0; i<respuesta.length; i++)
                  {
                    // Meteor.call("accuweather.conditions", respuesta[i].name, (err, res)=> {
                    //     if (err)
                    //     {
                    //         console.log(err);
                    //     }
                    //         console.log(res.results);
                    // });
                    console.log(i);
                  }
          });

         }else{
           console.log("Esta vacio");
           this.state.vacio =1;
          }
         }

        // lookPlaces(event)
        // {
        //     console.log("entro evento");
        //     event.preventDefault();
        //     Meteor.call("yelp.search", (err,resp)=> {
        //         if (err)
        //         {
        //           console.log(err);
        //         }
        //     });
        // }
        //
        // places(event)
        // {
        //   var city=event;
        //   Meteor.call("geo.search", city, (err, res)=> {
        //     if (err)
        //     {
        //         console.log(err);
        //     }
        //     else {
        //         console.log(res);
        //     }
        //   });
        // }

        log(event)
        {
            event.preventDefault();
            return (
            <Log/>
            );
        }
 }
export default App;
