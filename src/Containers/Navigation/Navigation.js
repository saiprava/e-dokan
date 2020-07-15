import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navigation.css";
import { connect } from 'react-redux';
import { auth } from '../../Firebase/Firebase.utils';
import CartIcon from './Carticon/Carticon';
import CartDropdown from './Cart-dropdown/CartDropdown';



const navigation = (props) => {
    return(
        <div className="Nav">
            <ul className="Navul">
                <li><NavLink className="notActive" activeclassname="active" to="/">HOME</NavLink></li>
                
                {
                    props.currentUser?
                    <div className="notActive" activeclassname="active" onClick={() => auth.signOut()}>SignOut</div>
                    :
                    <li><NavLink className="notActive" activeclassname="active" to="/sign-In">SignIn</NavLink></li>
                }
                <CartIcon/>
                
            </ul>  
            {              
            props.hidden ? null : <CartDropdown/>
            }
        </div>
    );
}

const mapStateToProps = ({user: {currentUser} , cart: {hidden}}) => ({
    currentUser,
    hidden
});



export default connect(mapStateToProps)(navigation);