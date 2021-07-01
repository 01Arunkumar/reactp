import React, { Component } from 'react';
import Empdetails from "./Empdetails";

class App extends Component {
    employee_Name="Arunkumar";
    city="Bidar";
    render() {
        return (
            <>
            <Empdetails name={this.employee_Name} address={this.city}/>
            </>
        )
    }
}

export default App

