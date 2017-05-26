import React, {Component, PropTypes} from 'react';


export default class Register extends Component{
  constructor(props)
   {
       super(props);


   }
   render()
   {
     return(
       <div className='Registrarse'>
         <form className="Registration form" onSubmit={this.register.bind(this)}>
           <label for="name">Name:</label>
             <input type="text" className="form-control" id="name" ref="name"/>
               <label for="email">Email:</label>
                 <input type="text" className="form-control" id="email" ref="email"/>
                   <label for="pass">Password:</label>
                     <input type="password" className="form-control" id="pass" ref="pass"/>

         </form>
         <span>RENDER ACCOUNTS HERE</span>
       </div>
     );
   }
   register(event)
   {
     event.preventDefault();
     const text1 = ReactDOM.findDOMNode(this.refs.name).value.trim();
      const text2 = ReactDOM.findDOMNode(this.refs.email).value.trim();
       const text3 = ReactDOM.findDOMNode(this.refs.pass).value.trim();

   }


}
