import React from "react";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
class App extends React.Component{
  render(){
    return<>
        <Navbar/>
        <Counter/>
    </>
    
  }
}
export default App;