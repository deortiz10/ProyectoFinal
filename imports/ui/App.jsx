import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
//import Task from './Task.jsx';

// App component - represents the whole app
 class App extends Component {


     render() {
         return (
             <div className="container">
                 <header>
                     <h1>Todo List</h1>
                 </header>
                 <form className="climate-form" onSubmit={this.Climate.bind(this)} >

                    <label> Ciudad</label>
                     <input name="city" className="city" type="text" ref="city" label="Ciudad"/>
                     <label> Pais</label>
                     <input name="country" className="country" type="text" ref="country" label="Pais"/>
                     <button type="submit" >Get conditions </button>
                 </form>



                 <br/>

             </div>
         );
     }

     Climate(event) {
         event.preventDefault();
         const text1 = ReactDOM.findDOMNode(this.refs.city).value.trim();
        const text2 = ReactDOM.findDOMNode(this.refs.country).value.trim();
         let arr= {
             city: text1,
             state: text2
         };
         Meteor.call("Wunderground.condition", arr, (err, res)=> {
             if (err)
             {
                 console.log(err);
             }
             console.log("made it!");
             console.log(res.results);

         })

     }
 }
export default App;