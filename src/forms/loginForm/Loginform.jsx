import React, { Component } from 'react'

class Loginform extends Component {
    state={
      email:"",
      password:""
    };
     /*upDateHandler=(event)=>{
        console.log(event.target.value);
        this.setState({email :event.target.value})
    }
    passwordHandler=(event)=>{
        console.log(event.target.value);
        this.setState({password: event.target.value})
    }*/
     
    updateValue=(event)=>{
       //   console.log(event.target.name);            testing purpose
        //console.log(event.target.value)
        this.setState({[event.target.name] : event.target.value});
    }

    loginHandler= (event) => {
        console.log(this.state.email, "..." , this.state.password  );
        event.preventDefault();
       
    }

    render() {
        return (
            <>
            <nav className="Navbar navbar-light bg-dark">
                <a className="Navbar-brand"
                href="https://www.google.com/search?q=greetlabs&rlz=1C1CHBF_enIN945__945&oq=greetlabs&aqs=chrome..69i57j46i10i175i199j0i10i30.4564j1j7&sourceid=chrome&ie=UTF-8">
                 <h1>Greelabs</h1>
                </a>
            </nav>
             <div className="container mt-2">
                <div className="row">
                     <div className="col md-2">
                        <div className="card">
                           <div className="card-header"> 
                           <h4>LOGIN FORM </h4>
                           <pre>{JSON.stringify(this.state)}</pre>
                           </div>
                           <div className="card-body"> 
                           <form onSubmit={this.loginHandler}>
                               <div className="form-group" >
                                   <input type="text" placeholder="email_id" className="form-control" name="email" 
                                   onChange={this.updateValue} />
                               </div>
                               <div className="form-group">
                                   <input type="password" placeholder="user_password" name="password" 
                                   className="form-control" 
                                   onChange= {this.updateValue} />
                               </div>
                               <div>
                                   <input type="submit" className="btn btn-success"/>
                               </div>
                           </form>
                           </div>
                           
                             
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}

export default Loginform
