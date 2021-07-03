import React, { Component } from 'react';

class RegistrationForm extends Component {
    state={
        userName:"",
        email:"",
        password:"",
    }

    upDateValue=(event)=>{
        console.log("testing");
      this.setState({[event.target.name]:event.target.value});
    }

    signUpHandler=(event)=>{
        console.log(this.state.userName, "...", this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                   <div className="container mt-2">
                      <div className="row">
                         <div className="col md-5">
                            <div className="card">
                               <div className="card-header"> 
                                  <h3>Registration Form</h3>
                                  <pre>{JSON.stringify(this.state)}</pre>
                               </div>
                               <div className="card-body">
                                      <form onSubmit={this.signUpHandler}>
                                         <div className="form-group">
                                           <input type="text"
                                                  placeholder="userName"
                                                  name="userName" 
                                                  className="form-control"
                                                  onChange={this.upDateValue}
                                                  />
                                         </div> 
                                         <div className="form-group">
                                           <input type="text"
                                                  placeholder="email"
                                                  name="email" 
                                                  className="form-control"
                                                  onChange={this.upDateValue}
                                                  />
                                         </div>  
                                         <div className="form-group">
                                           <input type="password"
                                                  placeholder="password"
                                                  name="password" 
                                                  className="form-control"
                                                  onChange={this.upDateValue}
                                                  />
                                         </div> 
                                           <input type="submit"
                                                  value="signUp"
                                                  className="btn btn-success"/>                                    
                                      </form>
                                      </div>
                                    </div>
                                </div>
                              </div>
                         </div>    
            </React.Fragment>
        )
    }
}

export default RegistrationForm
