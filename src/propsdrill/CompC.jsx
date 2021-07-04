import React, { Component } from 'react';
class CompC extends Component {
    render(){
        return(
        <>
         <div className="container mt-4">
             <div className="row">
                 <div className="col md-4">
                     <div className="card">
                         <div className="card-body">
                             <pre>{JSON.stringify(this.props)}</pre>
                             <h1 className="bg-success">CompC</h1>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </>
            )
    }
}
export default CompC;