import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

// App component - represents the whole app
 class App extends Component {


     render() {
         return (
             <div className="container">
                 <header>
                     <h1>Todo List</h1>
                 </header>
                 <form className="climate-form" onSubmit={this.Climate.bind(this)} >
                 <div class="container">
                    <label> Ciudad</label>
                     <input name="city" className="city" type="text" ref="city" label="Ciudad"/>
                     <div class="alert alert-warning">
                     <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                     </div>
                </div>
                     <button type="submit" >Get conditions </button>
                 </form>



                 <br/>

             </div>
         );
     }

     Climate(event) {
         event.preventDefault();
         const text1 = ReactDOM.findDOMNode(this.refs.city).value.trim();
         query = text1
         Meteor.call("accuweather.conditions", query, (err, res)=> {
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
