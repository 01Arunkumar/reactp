import React, { Component } from 'react'

export class Employee extends Component {
    render() {
        return (
            <div>
                <h1> Employee name={this.props.name} </h1>
                <h1>Address = {this.props.address}</h1>
            </div>
        )
    }
}

export default Employee
