import React, { Component }from 'react';
import Shoppers from './Components/Shoppers/Shoppers';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Signin from './Components/SignIn/Signin';
import Login from './Components/LogIn/Login';
import './App.css';
import { auth } from './Firebase/Firebase.utils';
import Navigation from './Containers/Navigation/Navigation';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount(){
    this.unsubscibeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
    
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }

  render(){
    return(
      <div  className="App">
        
        <BrowserRouter>
        <Navigation currentUser= {this.state.currentUser}/>
        <Switch>
        <Route exact path = '/' component ={Shoppers}/>
        <Route exact path = '/sign-In' component = {Signin}/>
        <Route exact path = '/login' component = {Login}/>
        </Switch>
        </BrowserRouter>
        </div>
    );
  }
}


export default App;
