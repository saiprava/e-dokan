import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navigation.css";
import { auth } from '../../Firebase/Firebase.utils';

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
                <li><NavLink className="notActive" activeclassname="active" to="/cart">Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default navigation;