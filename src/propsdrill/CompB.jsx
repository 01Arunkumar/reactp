import React, { Component } from 'react';

import CompC from "./CompC";
class CompB extends Component {
    render(){
        return(
        <>
         <div className="container mt-4">
             <div className="row">
                 <div className="col md-6">
                     <div className="card">
                         <div className="card-body">
                         <pre>{JSON.stringify(this.props)}</pre>
                             <h1 className="bg-warning">CompB</h1>
                             <CompC emp2={this.props.emp1}/>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </>
            )
    }
}
export default CompB;