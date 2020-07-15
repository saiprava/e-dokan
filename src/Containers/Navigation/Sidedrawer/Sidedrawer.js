import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
//import Drawer from '@material-ui/core/Drawer';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Sidedrawer.css';

const sidedrawer = (props) =>{
    return(
        <div className="Drawer">
            <AccountCircleIcon className="Icons"/>
            <HomeIcon className="Icons"/>
            <FavoriteBorderIcon className="Icons"/>
            <ShoppingCartIcon className="Icons"/>
        </div>
    );
}

export default sidedrawer;