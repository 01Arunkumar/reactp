import React, { Component } from 'react';
import CompA from "./CompA";

 class App extends Component {
     state={
         emp_Details:{
          empName :"Arunkumar",
          salary :10000,
         }
     };
    render() {
        return (
            <div>
                <CompA emp={this.state.emp_Details}/>
            </div>
        )
    }
}

export default App;
