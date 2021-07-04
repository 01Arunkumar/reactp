import React, { Component } from 'react';
/*import Loginform from "./forms/loginForm/Loginform";*/
/* import SmsApp from './forms/SmsApp'; */
/*import Showpassword from './forms/loginForm/Showpassword'; */
import RegistrationForm from '../RegistrationForm'; 

class App extends Component {
    render() {
        return (
            <React.Fragment>
               {/*<Loginform/>*/}
                {/*<SmsApp/>*/ }
              {  /*<Showpassword/>*/}
              <RegistrationForm/>
            </React.Fragment>
        )
    }
}

export default App
