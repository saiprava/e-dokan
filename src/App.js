import React, { Component }from 'react';
import Shoppers from './Components/Shoppers/Shoppers';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Signin from './Components/SignIn/Signin';
import './App.css';
class App extends Component {
  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <Switch>
        <Route exact path = '/' component ={Shoppers}/>
        <Route exact path = '/sign-In' component = {Signin}/>
        </Switch>
        </BrowserRouter>
        </div>
    );
  }
}


export default App;
