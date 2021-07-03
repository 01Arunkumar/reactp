import React, { Component } from 'react'

class Showpassword extends Component {
    state={
       type :"password"
    };

    updatePassword= ()=>{
        console.log("testing");
       this.state.type === "password" ?  this.setState({type : "text"}) : this.setState({ type : "password"});
    };

    render() {
        return (
            <React.Fragment>
              <div className="container mt-2">
                  <div className="row">
                     <div className="col md-5">
                        <div className="card">
                          <div className="card-header">
                              <h3>Show Password</h3>
                          </div>
                            <div className="card-body">
                               <div className="input-group mb-3">
                                 <div className="input-group-prepend">
                                   <div className="input-group-text">
                                     <input type={this.state.type} className="form-control" />
                                     <input type="checkbox" onChange =  {this.updatePassword}  />
                                   </div>
                                </div>
                                     
                               </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>  
            </React.Fragment>
        )
    }
}

export default Showpassword
