import React , {Component}from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
//import Drawer from '@material-ui/core/Drawer';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Sidedrawer.css';
import { Redirect } from 'react-router';
import { IconButton } from '@material-ui/core';

class Sidedrawer extends Component{
    constructor(props){
        super(props);
        this.state={
            clicked: false
        }
    }
    clickHandler = (route) => {
        this.setState({clicked : !this.state.clicked})
        {/*return(
        <Redirect to ={"/" + route}/>
        );*/}
    }
    render(){
    return(
        <div className="Drawer">
            <AccountCircleIcon className="Icons"/>
            <HomeIcon className="Icons"/>
            <IconButton  onClick={() => this.clickHandler()}>
            <FavoriteBorderIcon />
            {this.state.clicked?<Redirect to = "/favorites"/>:null}
            </IconButton>
            
            <ShoppingCartIcon className="Icons"/>
        </div>
    );
}
}

export default Sidedrawer;