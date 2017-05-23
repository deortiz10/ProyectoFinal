import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

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
                 <form className="climate-form" onSubmit={this.Climate.bind(this)} >
                 <div className="form-group">
                  <label for="city">Ciudad:</label>
                  <input type="text" className="form-control" id="city"/>
                  </div>
                     <button type="submit" className="btn info">Get conditions </button>
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
         query = text1
         console.log(query);
         if(query != ""){
          Meteor.call("accuweather.conditions", query, (err, res)=> {
              if (err)
              {
                  console.log(err);
              }
                  console.log(res.results);
          })
         }else{
         this.setState({vacio:1});
         }


     }
 }
export default App;
