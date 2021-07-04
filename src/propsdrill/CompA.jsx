import React, { Component } from 'react';

import CompB from "./CompB";
export class CompA extends Component {
    render(){
        return(
        <>
         <div className="container mt-4">
             <div className="row">
                 <div className="col md-12">
                     <div className="card">
                         <div className="card-body">
                             <pre>{JSON.stringify(this.props)}</pre>
                             <h1 className="bg-primary">CompA</h1>
                             <CompB emp1={this.props.emp}/>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </>
            )
    }
}
export default CompA;