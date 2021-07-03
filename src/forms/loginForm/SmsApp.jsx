import React, { Component } from 'react'

class SmsApp extends Component {
    state={
        limit:100,
        count:100
    }
    upDatevalue=(event)=>{
      console.log(event.target.value);
      this.setState({count: 100-event.target.value.length})
    }
    render() {
        return (
            <>
                <div className="container mt-2">
                    <div className="row">
                       <div className="col md-5">
                            <div className="card">
                               <div className="card-header">
                                   <h3>SMS App-remaining char</h3>
                               </div>
                              <div className="card-body">
                              <form>
                                  <div className="form-group">
                                      <textarea className="form-control" placeholder="enter Message" onChange={this.upDatevalue} maxLength="100"></textarea>
                                  </div>
                              </form>
                              <div className="card-footer">
                                  <h3>Remaining character:{this.state.count}</h3>
                              </div>
                            </div>
                           </div>
                         </div>
                     </div>
                </div>
            </>
        )
    }
}

export default SmsApp;
