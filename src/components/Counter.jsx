import React from "react";
class Counter extends  React.Component{
    state={
        Counter:0
    }
    decrHandler=()=>{
        this.setState({Counter:this.state.Counter-1})
    }
    incrHandler=()=>{
        this.setState({Counter:this.state.Counter+1})
    }
    render(){
        return<>
        <div className="container mt-4">
            <div className="row">
                <div className="col md-6">
                    <div className="card">
                        <div className="card-Header">
                        <h1>Qty:{this.state.Counter}</h1>
                        <hr/>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-success mx-4" onClick={this.decrHandler}>decr</button>
                            <button className="btn btn-warning mx-4" onClick={this.incrHandler}>incr</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
        </>
    }
}
export default Counter;