import React, { Component }from 'react';
import Shoppers from './Components/Shoppers/Shoppers';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Signin from './Components/SignIn/Signin';
import Login from './Components/LogIn/Login';
import './App.css';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import Navigation from './Containers/Navigation/Navigation';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/Actions';

class App extends Component {
  unsubscibeFromAuth = null;

  componentDidMount(){
    this.unsubscibeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser
            ({
              
                id:snapShot.id,
                ...snapShot.data()
            });
          
        });
      }
      else{
        this.props.setCurrentUser( userAuth);
      }
     
    });
    
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }

  render(){
    return(
      <div  className="App">
        
        <BrowserRouter>
        <Navigation />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



export default connect(null,mapDispatchToProps)(App);
