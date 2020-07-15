import React, { Component }from 'react';
import Shoppers from './Components/Shoppers/Shoppers';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import Signin from './Components/SignIn/Signin';
import Login from './Components/LogIn/Login';
import './App.css';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import Navigation from './Containers/Navigation/Navigation';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/Actions';
import Shop from './Components/Collection/Shop/Shop';
import Sidedrawer from './Containers/Navigation/Sidedrawer/Sidedrawer';

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
        <Navigation className="Nav"/>
        <Sidedrawer className="Drawer"/>
        
        <Switch>
        <Route exact path = '/' component ={Shoppers}/>
        <Route exact path = '/shop' component = {Shop} /> 
        <Route exact path = '/sign-In' render = {() => this.props.currentUser ? (<Redirect to = "/"/>) : <Signin/>}/>
        <Route exact path = '/login' render = {() => this.props.currentUser ? (<Redirect to = "/"/>) : <Login/>}/>
        </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



export default connect(mapStateToProps,mapDispatchToProps)(App);
