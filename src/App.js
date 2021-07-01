import React, { Component } from 'react';
import Loginform from "./forms/loginForm/Loginform";
import SmsApp from './forms/SmsApp';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Loginform/>
                <SmsApp/>
            </React.Fragment>
        )
    }
}

export default App
